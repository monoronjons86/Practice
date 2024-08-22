
const Footer = () => {
    return (
        <footer className="bg-gray-500 p-16">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div>
                    <div className="flex items-center gap-2 pb-6">
                        <img src="./image/codeabc_circle.png" alt=""/>
                        <h1 className="font-bold">Code ABC</h1>
                    </div>
                    <div>
                        <p>Terms of use | Privacry</p>
                        <p>Terms of use | Privacry</p>
                        
                    </div>

                </div>
                <div >
                    <div className="pb-6">
                        <h1 className="font-bold">About us</h1>
                    </div>
                    <div>
                        <p>Support center</p>
                        <p>Customer Support </p>
                        <p>About</p>
                    </div>
                </div>
                <div>
                    <div className="pb-6">
                        <h1 className="font-bold">Our information</h1>
                    </div>
                    <div>
                        <p>Support center</p>
                        <p>Customer Support </p>
                        <p>About</p>
                    </div>
                </div>
                <div>
                    <div className="pb-6">
                        <h1 className="font-bold">My Account</h1>
                    </div>
                    <div>
                        <p>Support center</p>
                        <p>Customer Support </p>
                        <p>About</p>
                    </div>
                </div>
                <div>
                    <div className="pb-6">
                        <h1 className="font-bold">Connect</h1>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <img src="./image/facebook.png" alt=""/>
                            <p>Facebook</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="./image/twitter.png" alt=""/>
                            <p>Twitter</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="./image/github.png" alt=""/>
                            <p>Github</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="./image/dribble.png" alt=""/>
                            <p>Dribble</p>
                        </div>
                
                    </div>
                </div>

            </div>
         </footer>

    );
};

export default Footer;