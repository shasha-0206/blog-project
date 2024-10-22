import React from 'react';
import '../styles/poststyle.css'
const PostLogin = () => {
  return (
    <>

      <section id="sidebar">
        <a href="#" className="brand">
          <i className='bx bxs-smile'></i>
          <span className="text">AdminHub</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className='bx bxs-dashboard' ></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="profiles.html">
              <i className='bx bxs-user'></i>
              <span className="text">Profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-comment-detail'></i>
              <span className="text">Comments</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-user-account'></i>
              <span className="text">Users</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-group' ></i>
              <span className="text">Posts</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#">
              <i className='bx bxs-cog' ></i>
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className='bx bxs-log-out-circle' ></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>

      <section id="content">

        <nav>
          <i className='bx bx-menu' ></i>
          <a href="#" className="nav-link">Categories</a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn"><i className='bx bx-search' ></i></button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <a href="#" className="notification">
            <i className='bx bxs-bell' ></i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            {/* <img src="img/people.png" /> */}
          </a>
        </nav>

        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li><i className='bx bx-chevron-right' ></i></li>
                <li>
                  <a className="active" href="#">Home</a>
                </li>
              </ul>
            </div>

          </div>

          <ul className="box-info">
            <li>
              <i className='bx bxs-user'></i>
              <span className="text">
                <h3>1020</h3>
                <p>TOTAL USERS</p>
              </span>
            </li>
            <li>
              <i className='bx bxs-comment'></i>
              <span className="text">
                <h3>2834</h3>
                <p>TOTAL COMMENTS</p>
              </span>
            </li>
            <li>
              <i className='bx bxs-dollar-circle' ></i>
              <span className="text">
                <h3>20</h3>
                <p>TOTAL POSTS</p>
              </span>
            </li>
          </ul>


          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Users</h3>
                <i className='bx bx-search' ></i>
                <i className='bx bx-filter' ></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>USER IMAGE</th>
                    <th>USERNAME</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* <img src="img/people.png" /> */}

                    </td>
                    <td>John Doe</td>

                  </tr>
                  <tr>
                    <td>
                      {/* <img src="img/people.png" /> */}

                    </td>
                    <td>John Doe</td>

                  </tr>
                  <tr>
                    <td>
                      {/* <img src="img/people.png" /> */}

                    </td>
                    <td>John Doe</td>

                  </tr>
                  <tr>
                    <td>
                      {/* <img src="img/people.png" /> */}

                    </td>
                    <td>John Doe</td>
                    {/* <!-- <td><span className="status pending">Pending</span></td> --> */}
                  </tr>
                  <tr>
                    <td>
                      {/* <img src="img/people.png" /> */}

                    </td>
                    <td>John Doe</td>

                  </tr>
                </tbody>
              </table>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Recent Comments</h3>
                <i className='bx bx-plus' ></i>
                <i className='bx bx-filter' ></i>
              </div>

              <ul className="todo-list">
                <li className="completed">
                  <p>Comment 1</p>
                  <i className='bx bx-dots-vertical-rounded' ></i>
                </li>
                <li className="completed">
                  <p>Comment 2</p>
                  <i className='bx bx-dots-vertical-rounded' ></i>
                </li>
                <li className="not-completed">
                  <p>Comment 3</p>
                  <i className='bx bx-dots-vertical-rounded' ></i>
                </li>
                <li className="completed">
                  <p>Comment 4</p>
                  <i className='bx bx-dots-vertical-rounded' ></i>
                </li>
                <li className="not-completed">
                  <p>Comment 5</p>
                  <i className='bx bx-dots-vertical-rounded' ></i>
                </li>
              </ul>
            </div>
          </div>
        </main>

      </section>


    </>
  );
};

export default PostLogin;
