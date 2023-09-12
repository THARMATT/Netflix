import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {firebaseAuth} from '../utils/firebase-config'
export default function Navbar({ isScrolled }) {
    const navigate = useNavigate();
  const links = [
    { name: "Home", link: "/" },
    { name: "TV", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  const [showSearch, setshowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  return (
    <Container>
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="logo" />
          </div>
          <ul className="links flex">
            {
              links.map((linkItem) => {
                const { name, link } = linkItem;
                return (
                  <li key={name}>
                    <Link to={link} style={{textDecoration:"none",color:"white"}}>{name}</Link>
                  </li>
                );
              })

              // links.map((name,link)=>{
              //     return ( <li key={name}><Link to={link.link}>{name}</Link></li> )
              // })
            }
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setshowSearch(true)}
              onBlur={() => {
                if (!inputHover) setshowSearch(false);
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => {
                setInputHover(true);
              }}
              onMouseLeave={() => {
                setInputHover(false);
              }}
              onBlur={() => {
                setInputHover(false);
                setshowSearch(false);
              }}
            />
          </div>
          <button
            onClick={() => {
              signOut(firebaseAuth)
            }}
          >
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </Container>
  );
}
const Container = styled.div`
.scrolled{
    background-color:black;
}
nav{
    position:sticky;
    height:6.5rem;
    top:0;
    width:100%;
    justify-content:space-between;
    position:fixed;
    z-index:2;
    padding:0.4rem;
    transition:0.3s ease-in-out;
    .left{
        gap:2rem;
        .brand{
            img{
                height:4rem;
            }
        }
        .links{
            list-style:  none;
            gap:2rem;
            li{
                color:white;
                text-decoration:none;
            }
        }
    }
    .right{
        padding:2rem;
        gap:1rem;
        button{
            background-color:transparent;
            border:none;
            cursor:pointer;
            &:focus{
                outline:none!important;

            }
            svg{
                color:#f34242;
                font-size:1.2rem;
            }
        }
        .search{
            gap:0.4rem;
            display:flex;
            align-items:center;
            justify-content:center;
            padding:0.2rem;
            padding-left:0.5rem;
            button{
                background-color:transparent;
                svg{
                    color:white;

                }
            }
            input{
                width:0;
                opacity:0;
                visibility:hidden;
                transition:0.3s ease-in-out;
                background-color:transparent;
                border:none;
                color:white;
                &:focus{
                    outline:none;
                }
            }
        }
        .show-search{

            border:1px solid white;
            background-color:rgba(0,0,0,0.6);
            input{
                width:100%;
                opacity:1;
                visibility:visible;
                padding:0.3rem;
            }
        }
    }
}`;
