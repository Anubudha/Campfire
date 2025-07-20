import React from "react";

export default function Navbar() {
  return (
    <header className="header svelte-1mij2k1 " style={{ xIndex: "1" }}>
      <nav className="gl-header svelte-1mij2k1 ">
        <div className="navigation svelte-1mij2k1 ">
          <div className="logo svelte-1mij2k1 ">
            <a id="gtm-hnav-header-logo" href="/">
              <img
                className="logo-image svelte-mho99u "
                alt="Campfire"
                src="../images/campfire.BxyaODaz.svg"
                loading="eager"
              />
            </a>
            <form
              className="tb-none projects-search svelte-1mij2k1 "
              action="/projects/search"
              method="GET"
              autoComplete="off"
            >
              <label htmlFor="header-search" className="svelte-1mij2k1 ">
                <svg
                  className="svelte-fa svelte-fa-base svelte-bvo74f "
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    transform="translate(256 256)"
                    transform-origin="128 0"
                    className="svelte-bvo74f"
                  >
                    <g
                      transform="translate(0,0) scale(1,1)"
                      className="svelte-bvo74f"
                    >
                      <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        fill="currentColor"
                        transform="translate(-256 -256)"
                        className="svelte-bvo74f"
                      ></path>
                    </g>
                  </g>
                </svg>
              </label>
              <input
                id="header-search"
                name="word"
                type="search"
                placeholder="Keyword Search"
                className="svelte-1mij2k1"
              />
              <div className="suggest svelte-1mij2k1 ">
                <div className="origin svelte-180wodk "></div>
              </div>
            </form>
          </div>
          <div className="pj-created-search svelte-1mij2k1 ">
            <a
              id="gtm-hnav-link-to-readyfor-sp"
              href="/readyfor"
              className="link svelte-zvq2u7 tb-none "
            >
              <span className="tb-none svelte-mho99u ">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    How to Post a Project
                  </font>
                </font>
              </span>
              <span className="not-tb-none svelte-mho99u ">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Get started</font>
                </font>
              </span>
            </a>
            <div className="link-to-projects-wrap svelte-6j2us7 ">
              <a
                id="gtm-hnav-link-to-projects-pc"
                className="link-to-projects svelte-6j2us7 "
                href="/projects/search"
              >
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Find a project
                  </font>
                </font>
              </a>
              <div className="more-search svelte-6j2us7 ">
                <ul className="sort svelte-6j2us7 ">
                  <li className="sort-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?sort=popular"
                      id="gtm-hnav-menu-popular"
                      className="svelte-6j2us7"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Popular Projects
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="sort-item svelte-6j2us7 ">
                    <a
                      href="/project_rewards/popular"
                      id="gtm-hnav-menu-reward-popular"
                      className="svelte-6j2us7"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Featured returns
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="sort-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?sort=fresh"
                      id="gtm-hnav-menu-fresh"
                      className="svelte-6j2us7"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Hot New Projects
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="sort-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?sort=last_spurt"
                      id="gtm-hnav-menu-last"
                      className="svelte-6j2us7"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Projects nearing end of recruitment period
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="sort-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?project_status=pre&amp;sort=will_publish_at"
                      id="gtm-hnav-menu-comingsoon"
                      className="svelte-6j2us7"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Coming soon
                        </font>
                      </font>
                    </a>
                  </li>
                </ul>
                <ul className="category svelte-6j2us7 ">
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=art"
                      id="gtm-hnav-menu-category-art"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Art and Photography
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=music"
                      id="gtm-hnav-menu-category-music"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>music</font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=dance"
                      id="gtm-hnav-menu-category-dance"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Stage/Performance
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=product"
                      id="gtm-hnav-menu-category-product"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          product
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=technology"
                      id="gtm-hnav-menu-category-technology"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Technology Gadgets
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=game"
                      id="gtm-hnav-menu-category-game"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Game and service development
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=food"
                      id="gtm-hnav-menu-category-food"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Food &amp; Restaurants
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=fashion"
                      id="gtm-hnav-menu-category-fashion"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          fashion
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=movie"
                      id="gtm-hnav-menu-category-movie"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Video/Film
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=publishing"
                      id="gtm-hnav-menu-category-publishing"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Book and magazine publishing
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=anime"
                      id="gtm-hnav-menu-category-anime"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Anime and Manga
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=sports"
                      id="gtm-hnav-menu-category-sports"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Sports</font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=business"
                      id="gtm-hnav-menu-category-business"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Business/Entrepreneurship
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=challenge"
                      id="gtm-hnav-menu-category-challenge"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Challenge
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=beauty"
                      id="gtm-hnav-menu-category-beauty"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Beauty and Healthcare
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=social-good"
                      id="gtm-hnav-menu-category-social-good"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Social Good
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="category-item svelte-6j2us7 ">
                    <a
                      href="/projects/search?category=local"
                      id="gtm-hnav-menu-category-local"
                      className="svelte-6j2us7"
                    >
                      <span className="icon svelte-6j2us7 ">
                        <svg
                          className="svelte-fa svelte-fa-base svelte-bvo74f "
                          viewBox="0 0 320 512"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(160 256)"
                            transform-origin="80 0"
                            className="svelte-bvo74f"
                          >
                            <g
                              transform="translate(0,0) scale(1,1)"
                              className="svelte-bvo74f"
                            >
                              <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                fill="currentColor"
                                transform="translate(-160 -256)"
                                className="svelte-bvo74f"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Urban development and regional revitalization
                        </font>
                      </font>
                    </a>
                  </li>
                </ul>
                <ul className="other-brands top-other-brands svelte-6j2us7 ">
                  <li className="other-brands-item svelte-6j2us7 ">
                    <a
                      href="/forsocialgood/readyfor"
                      id="gtm-hnav-menu-social-good"
                      className="svelte-6j2us7"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          CAMPFIRE for Social Good
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="other-brands-item svelte-6j2us7 ">
                    <a
                      href="/creation"
                      id="gtm-hnav-menu-creation"
                      className="svelte-6j2us7"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          CAMPFIRE Creation
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="other-brands-item svelte-6j2us7 ">
                    <a
                      href="/booster-parco"
                      id="gtm-hnav-menu-booster"
                      className="svelte-6j2us7"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          BOOSTER
                        </font>
                      </font>
                    </a>
                  </li>
                </ul>
                <ul className="other-brands top-other-brands svelte-6j2us7 ">
                  <li className="other-brands-item svelte-6j2us7 ">
                    <a
                      href="/furusato"
                      id="gtm-hnav-menu-furusato"
                      className="svelte-6j2us7"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          CAMPFIRE Hometown Tax Donation
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="other-brands-item svelte-6j2us7 ">
                    <a
                      href="/machi-ya"
                      id="gtm-hnav-menu-machi-ya"
                      className="svelte-6j2us7"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Machiya
                        </font>
                      </font>
                    </a>
                  </li>
                  <li className="other-brands-item svelte-6j2us7 ">
                    <a
                      href="https://community.camp-fire.jp/"
                      id="gtm-hnav-menu-community"
                      className="svelte-6j2us7"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          community
                        </font>
                      </font>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pj-search-sp svelte-vrsh1y ">
              <button
                type="button"
                id="gtm-search-modal-button"
                className="pj-search-icon svelte-vrsh1y "
              >
                <svg
                  className="svelte-fa svelte-fa-base svelte-bvo74f "
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    transform="translate(256 256)"
                    transform-origin="128 0"
                    className="svelte-bvo74f"
                  >
                    <g
                      transform="translate(0,0) scale(1,1)"
                      className="svelte-bvo74f"
                    >
                      <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        fill="currentColor"
                        transform="translate(-256 -256)"
                        className="svelte-bvo74f"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
              <div className="search-modal svelte-vrsh1y ">
                <section className="word-search svelte-vrsh1y ">
                  <form
                    action="/projects/search"
                    method="GET"
                    autoComplete="off"
                    className="svelte-vrsh1y"
                  >
                    <input
                      name="word"
                      type="search"
                      placeholder="Search by keyword"
                      className="svelte-vrsh1y"
                    />
                    <button type="submit" className="svelte-vrsh1y">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>search</font>
                      </font>
                    </button>
                  </form>
                </section>
                <section className="category-lists svelte-vrsh1y ">
                  <h3 className="svelte-vrsh1y">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Search by category
                      </font>
                    </font>
                  </h3>{" "}
                  <ul className="main-categories">
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=product"
                        id="gtm-hnav-product"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="product"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-product.BHN0NOsE.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            product
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=technology"
                        id="gtm-hnav-technology"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Technology Gadgets"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-technology.Dh1jqYZT.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Technology Gadgets
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=local"
                        id="gtm-hnav-local"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Urban development and regional revitalization"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-local.D5BvHaj7.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Urban development and regional revitalization
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=food"
                        id="gtm-hnav-food"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Food &amp; Restaurants"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-food.DCWQ2yLh.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Food &amp; Restaurants
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=social-good"
                        id="gtm-hnav-social-good"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Social Good"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-social-good.BB6kmUKx.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Social Good
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=music"
                        id="gtm-hnav-music"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="music"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-music.DbwgclJA.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            music
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>{" "}
                  <ul className="sub-categories svelte-vrsh1y ">
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=art"
                        id="gtm-hnav-art"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Art and Photography"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-art.BsvhfE0L.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Art and Photography
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=dance"
                        id="gtm-hnav-dance"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Stage/Performance"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-dance.dbITrcRh.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Stage/Performance
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=game"
                        id="gtm-hnav-game"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Game and service development"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-game.LOIyB5Pl.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Game and service development
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=fashion"
                        id="gtm-hnav-fashion"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="fashion"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-fashion.Ref9qhuw.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            fashion
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=movie"
                        id="gtm-hnav-movie"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Video/Film"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-movie.CbYwJTYJ.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Video/Film
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=publishing"
                        id="gtm-hnav-publishing"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Book and magazine publishing"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-publishing.86EFkZr9.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Book and magazine publishing
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=anime"
                        id="gtm-hnav-anime"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Anime and Manga"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-anime.B35woZta.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Anime and Manga
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=sports"
                        id="gtm-hnav-sports"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Sports"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-sports.DFKcbfwT.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Sports
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=business"
                        id="gtm-hnav-business"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Business/Entrepreneurship"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-business.8CaqgoWg.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Business/Entrepreneurship
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=challenge"
                        id="gtm-hnav-challenge"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Challenge"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-challenge.B8AvvwPL.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Challenge
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="category-item svelte-vrsh1y ">
                      <a
                        href="/projects/search?category=beauty"
                        id="gtm-hnav-beauty"
                        className="svelte-vrsh1y"
                      >
                        <img
                          alt="Beauty and Healthcare"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/category-beauty.B7HHi1ur.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Beauty and Healthcare
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(160 256)"
                              transform-origin="80 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                  fill="currentColor"
                                  transform="translate(-160 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>{" "}
                  <button
                    type="button"
                    className="more-categories svelte-vrsh1y "
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Show more
                      </font>
                    </font>
                    <span className="icon svelte-vrsh1y ">
                      <svg
                        className="svelte-fa svelte-fa-base svelte-bvo74f "
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          transform="translate(256 256)"
                          transform-origin="128 0"
                          className="svelte-bvo74f"
                        >
                          <g
                            transform="translate(0,0) scale(1,1)"
                            className="svelte-bvo74f"
                          >
                            <path
                              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                              fill="currentColor"
                              transform="translate(-256 -256)"
                              className="svelte-bvo74f"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </button>
                </section>
                <section className="region-lists svelte-vrsh1y ">
                  <h3 className="svelte-vrsh1y">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Search by region
                      </font>
                    </font>
                  </h3>
                  <ul className="region">
                    <li className="area-wrap svelte-vrsh1y ">
                      <button type="button" className="area svelte-vrsh1y ">
                        <img
                          alt="Hokkaido Region"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/area-hokkaido.BKgllcFU.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Hokkaido Region
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 512 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(256 256)"
                              transform-origin="128 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                  fill="currentColor"
                                  transform="translate(-256 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </button>{" "}
                      <div className="prefectures-wrap svelte-vrsh1y ">
                        <ul className="prefectures svelte-vrsh1y ">
                          <li>
                            <a
                              href="/projects/search?prefecture=hokkaido"
                              id="gtm-hnav-hokkaido"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Hokkaido
                                </font>
                              </font>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="area-wrap svelte-vrsh1y ">
                      <button type="button" className="area svelte-vrsh1y ">
                        <img
                          alt="Tohoku Region"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/area-tohoku.BeSsXzNB.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Tohoku Region
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 512 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(256 256)"
                              transform-origin="128 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                  fill="currentColor"
                                  transform="translate(-256 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </button>{" "}
                      <div className="prefectures-wrap svelte-vrsh1y ">
                        <ul className="prefectures svelte-vrsh1y ">
                          <li>
                            <a
                              href="/projects/search?prefecture=aomori"
                              id="gtm-hnav-aomori"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Aomori Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=iwate"
                              id="gtm-hnav-iwate"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Iwate Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=miyagi"
                              id="gtm-hnav-miyagi"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Miyagi Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=akita"
                              id="gtm-hnav-akita"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Akita Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=yamagata"
                              id="gtm-hnav-yamagata"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Yamagata Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=fukushima"
                              id="gtm-hnav-fukushima"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Fukushima Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="area-wrap svelte-vrsh1y ">
                      <button type="button" className="area svelte-vrsh1y ">
                        <img
                          alt="Kanto region"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/area-kanto.CDE1hLfR.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Kanto region
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 512 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(256 256)"
                              transform-origin="128 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                  fill="currentColor"
                                  transform="translate(-256 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </button>{" "}
                      <div className="prefectures-wrap svelte-vrsh1y ">
                        <ul className="prefectures svelte-vrsh1y ">
                          <li>
                            <a
                              href="/projects/search?prefecture=ibaraki"
                              id="gtm-hnav-ibaraki"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Ibaraki Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=tochigi"
                              id="gtm-hnav-tochigi"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Tochigi Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=gumma"
                              id="gtm-hnav-gumma"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Gunma Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=saitama"
                              id="gtm-hnav-saitama"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Saitama Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=chiba"
                              id="gtm-hnav-chiba"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Chiba Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=tokyo"
                              id="gtm-hnav-tokyo"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Tokyo
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=kanagawa"
                              id="gtm-hnav-kanagawa"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Kanagawa Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="area-wrap svelte-vrsh1y ">
                      <button type="button" className="area svelte-vrsh1y ">
                        <img
                          alt="Chubu region"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/area-chubu.Bn2N3aCb.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Chubu region
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 512 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(256 256)"
                              transform-origin="128 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                  fill="currentColor"
                                  transform="translate(-256 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </button>{" "}
                      <div className="prefectures-wrap svelte-vrsh1y ">
                        <ul className="prefectures svelte-vrsh1y ">
                          <li>
                            <a
                              href="/projects/search?prefecture=nigata"
                              id="gtm-hnav-nigata"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Niigata Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=toyama"
                              id="gtm-hnav-toyama"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Toyama Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=ishikawa"
                              id="gtm-hnav-ishikawa"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Ishikawa Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=fukui"
                              id="gtm-hnav-fukui"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Fukui Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=yamanashi"
                              id="gtm-hnav-yamanashi"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Yamanashi Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=nagano"
                              id="gtm-hnav-nagano"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Nagano Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=gifu"
                              id="gtm-hnav-gifu"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Gifu Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=shizuoka"
                              id="gtm-hnav-shizuoka"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Shizuoka Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=aichi"
                              id="gtm-hnav-aichi"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Aichi prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=mie"
                              id="gtm-hnav-mie"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Mie Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="area-wrap svelte-vrsh1y ">
                      <button type="button" className="area svelte-vrsh1y ">
                        <img
                          alt="Kinki Region"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/area-kinki.CrJK88ec.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Kinki Region
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 512 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(256 256)"
                              transform-origin="128 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                  fill="currentColor"
                                  transform="translate(-256 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </button>{" "}
                      <div className="prefectures-wrap svelte-vrsh1y ">
                        <ul className="prefectures svelte-vrsh1y ">
                          <li>
                            <a
                              href="/projects/search?prefecture=shiga"
                              id="gtm-hnav-shiga"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Shiga Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=kyoto"
                              id="gtm-hnav-kyoto"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Kyoto Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=osaka"
                              id="gtm-hnav-osaka"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Osaka Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=hyogo"
                              id="gtm-hnav-hyogo"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Hyogo Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=nara"
                              id="gtm-hnav-nara"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Nara Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=wakayama"
                              id="gtm-hnav-wakayama"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Wakayama Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="area-wrap svelte-vrsh1y ">
                      <button type="button" className="area svelte-vrsh1y ">
                        <img
                          alt="Chugoku Region"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/area-chugoku.BYbIBeHo.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Chugoku Region
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 512 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(256 256)"
                              transform-origin="128 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                  fill="currentColor"
                                  transform="translate(-256 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </button>{" "}
                      <div className="prefectures-wrap svelte-vrsh1y ">
                        <ul className="prefectures svelte-vrsh1y ">
                          <li>
                            <a
                              href="/projects/search?prefecture=tottori"
                              id="gtm-hnav-tottori"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Tottori Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=shimane"
                              id="gtm-hnav-shimane"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Shimane Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=okayama"
                              id="gtm-hnav-okayama"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Okayama Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=hiroshima"
                              id="gtm-hnav-hiroshima"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Hiroshima Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=yamaguchi"
                              id="gtm-hnav-yamaguchi"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Yamaguchi Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="area-wrap svelte-vrsh1y ">
                      <button type="button" className="area svelte-vrsh1y ">
                        <img
                          alt="Shikoku Region"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/area-shikoku.CCcjpBD6.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Shikoku Region
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 512 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(256 256)"
                              transform-origin="128 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                  fill="currentColor"
                                  transform="translate(-256 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </button>{" "}
                      <div className="prefectures-wrap svelte-vrsh1y ">
                        <ul className="prefectures svelte-vrsh1y ">
                          <li>
                            <a
                              href="/projects/search?prefecture=tokushima"
                              id="gtm-hnav-tokushima"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Tokushima Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=kagawa"
                              id="gtm-hnav-kagawa"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Kagawa Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=ehime"
                              id="gtm-hnav-ehime"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Ehime Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=kochi"
                              id="gtm-hnav-kochi"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Kochi Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="area-wrap svelte-vrsh1y ">
                      <button type="button" className="area svelte-vrsh1y ">
                        <img
                          alt="Kyushu and Okinawa Region"
                          loading="lazy"
                          src="https://static.camp-fire.jp/frontend/_app/immutable/assets/area-kyushu.CwnZrBSx.png"
                          className="svelte-vrsh1y"
                        />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Kyushu and Okinawa Region
                          </font>
                        </font>
                        <span className="icon svelte-vrsh1y ">
                          <svg
                            className="svelte-fa svelte-fa-base svelte-bvo74f "
                            viewBox="0 0 512 512"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(256 256)"
                              transform-origin="128 0"
                              className="svelte-bvo74f"
                            >
                              <g
                                transform="translate(0,0) scale(1,1)"
                                className="svelte-bvo74f"
                              >
                                <path
                                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                  fill="currentColor"
                                  transform="translate(-256 -256)"
                                  className="svelte-bvo74f"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </button>{" "}
                      <div className="prefectures-wrap svelte-vrsh1y ">
                        <ul className="prefectures svelte-vrsh1y ">
                          <li>
                            <a
                              href="/projects/search?prefecture=fukuoka"
                              id="gtm-hnav-fukuoka"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Fukuoka Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=saga"
                              id="gtm-hnav-saga"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Saga Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=nagasaki"
                              id="gtm-hnav-nagasaki"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Nagasaki Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=kumamoto"
                              id="gtm-hnav-kumamoto"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Kumamoto Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=oita"
                              id="gtm-hnav-oita"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Oita Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=miyazaki"
                              id="gtm-hnav-miyazaki"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Miyazaki Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=kagoshima"
                              id="gtm-hnav-kagoshima"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Kagoshima Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/projects/search?prefecture=okinawa"
                              id="gtm-hnav-okinawa"
                              className="svelte-vrsh1y"
                            >
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Okinawa Prefecture
                                </font>
                              </font>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </section>
                <section className="link-to-projects svelte-vrsh1y ">
                  <h3 className="svelte-vrsh1y">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        See all projects together
                      </font>
                    </font>
                  </h3>
                  <a
                    href="/projects/search"
                    id="gtm-hnav-link-to-projects"
                    className="svelte-vrsh1y"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        To the list of projects
                      </font>
                    </font>
                    <span className="icon svelte-vrsh1y ">
                      <svg
                        className="svelte-fa svelte-fa-base svelte-bvo74f "
                        viewBox="0 0 320 512"
                        aria-hidden="true"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          transform="translate(160 256)"
                          transform-origin="80 0"
                          className="svelte-bvo74f"
                        >
                          <g
                            transform="translate(0,0) scale(1,1)"
                            className="svelte-bvo74f"
                          >
                            <path
                              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                              fill="currentColor"
                              transform="translate(-160 -256)"
                              className="svelte-bvo74f"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </a>
                </section>
                <section className="close-modal svelte-vrsh1y ">
                  <button type="button" className="svelte-vrsh1y">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Close</font>
                    </font>
                    <span className="icon svelte-vrsh1y ">
                      <svg
                        className="svelte-fa svelte-fa-base svelte-bvo74f "
                        viewBox="0 0 384 512"
                        aria-hidden="true"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          transform="translate(192 256)"
                          transform-origin="96 0"
                          className="svelte-bvo74f"
                        >
                          <g
                            transform="translate(0,0) scale(1,1)"
                            className="svelte-bvo74f"
                          >
                            <path
                              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                              fill="currentColor"
                              transform="translate(-192 -256)"
                              className="svelte-bvo74f"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </button>
                </section>
              </div>
            </div>
          </div>
          <div className="login-link svelte-1mij2k1 ">
            <a
              id="gtm-hnav-link-to-login"
              className="login svelte-1mij2k1 "
              href="/login"
              rel="nofollow"
            >
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Log in</font>
              </font>
            </a>
            <span className="svelte-1mij2k1">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>/</font>
              </font>
            </span>
            <a
              id="gtm-hnav-link-to-signup"
              href="/signup"
              className="svelte-1mij2k1"
            >
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  New member registration
                </font>
              </font>
            </a>
          </div>
        </div>
        <div className="pj-created-search-sp svelte-1mij2k1 ">
          <a
            id="gtm-hnav-link-to-readyfor-sp"
            href="/readyfor"
            className="svelte-1kff4ft"
          >
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                How to Post a Project
              </font>
            </font>
          </a>
          <a
            id="gtm-hnav-link-to-projects-sp"
            href="/projects/search"
            className="svelte-1kff4ft"
          >
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Find a project</font>
            </font>
          </a>
        </div>
      </nav>
    </header>
  );
}
