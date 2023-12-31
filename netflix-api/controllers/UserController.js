const User = require('../models/UserModel')

module.exports.addToLikedMovies = async (req, res) => {


    try {
        const { email, data } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const { likedMovies } = user;
            const movieAlreadyLiked = likedMovies.find(({ id }) => (id === data.id));
            if (!movieAlreadyLiked) {
                await User.findByIdAndUpdate(
                    user._id, {
                    likedMovies: [...user.likedMovies, data],
                },
                    { new: true }
                );
            }
            else return res.json({ msg: "movie is already added to liked list" })
        }
        else await User.create({ email, likedMovies: [data] })
        return res.json({ msg: "movie added successfully" })
    } catch (error) {
        console.log(error)
        return res.json({ message: "error adding movie" })
     
    }
};

module.exports.getLikedMovies = async (req, res) => {
    try {

        const { email } = req.params;
        const user = await User.findOne({ email })
        if (user) {
            res.json({ msg: "success", movies: user.likedMovies })
        }
        else {
            return res.json({ msg: "User with this email doesnt exist" })
        }
    } catch (error) {
        //    return res.json({message:"erorr"})
        return res.json({ message: "error fetching movie" })
    }
}
module.exports.removeFromLikedMovies = async (req, res) => {
    try {
        const { email, movieId } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const { likedMovies } = user;
            const movieIndex = likedMovies.findIndex(({ id }) => id === movieId)
            if (!movieIndex) {
                return res.status(400).json({ msg: "movie not found" });
            }
            likedMovies.splice(movieIndex, 1);
            await User.findByIdAndUpdate(
                user._id, {
                    likedMovies,
                },
                { new: true }
            );
            return res.json({ msg: "Movie Removed successfully", movies: likedMovies });
        }
    } catch (error) {
        console.log(error)
        return res.json({ message: "error deleting movie" });
    }
}
