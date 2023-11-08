import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const userData  = JSON.parse(localStorage.getItem('users'))
  console.log("userData", userData);

  // handle logout methods 
  const handlelogout = ()=>{
    localStorage.removeItem('loggedIn');
    navigate('/login')
  }
  return (
    <section className="vh-100 bg-image"
      style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5"> welcome to our Home page Mr {userData[0].name}
                    </h2>
                  
                  <form>
                    <div className="d-flex justify-content-center">
                      <button 



                      onClick={handlelogout}
                       type='submit'
                       className="btn btn-primary btn-lg">Logout
                       
                       </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
