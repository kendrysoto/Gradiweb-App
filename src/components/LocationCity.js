import React from 'react';
import '../styles/LocationCity.scss';
import arabia from '../images/arabia.jpg';
import vector from '../images/vector.png';
import museo from '../images/museo.jpg';
import galery from '../images/galery.png';
import user1 from '../images/user1.jpg';


const LocationCity = () => {

    return (
        <div className="location">
            <p className="placeVisit"><strong>Place to</strong> Visit</p>
            <div className="boxLocationOne">
                <div className="boxVector">
                    <img src={vector}></img>
                </div>
                <div className="locationCity">
                    <p >Arab Streat</p>
                    <p>singapore</p>
                </div>
                <img src={arabia} className="locationOneImg"></img>
            </div>

            <div className="boxLocationTwo">
                <div className="boxVector">
                    <img src={vector}></img>
                </div>
                <div className="boxUser">
                    <div className="userOne">
                        <p>+ Top Reviews</p>
                    </div>
                    <div className="userTwo">
                        <img src={user1}></img>
                    </div>
                    <div className="userThee">
                        <img src={user1}></img>
                    </div>
                    <div className="userThee">
                        <img src={user1}></img>
                    </div>
                    <div className="userFour">
                        <p>6+</p>
                    </div>
                </div>
                <div className="locationImgOne">
                    <div className="locationCity">
                        <p >art science </p>
                        <p>museum</p>
                    </div>
                    <img src={museo}></img>
                </div>
                <div className="locationImgTwo" >
                    <div className="locationImgTwo">
                        <div className="locationCity">
                            <p >Arab Streat</p>
                            <p>singapore</p>
                        </div>
                        <button>+</button>
                        <img src={galery}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationCity;