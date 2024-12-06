import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signOut,signInWithPopup, GoogleAuthProvider,provider,
    db,collection, addDoc ,updateDoc ,serverTimestamp
  } from "./firebase.js";
  

  let signUp = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let cPassword = document.getElementById("confirm_pass").value;
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let userData = { name, number, email, password };
    console.log(userData);
  
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      console.log("test");
      createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          alert("Account created successfully");
          window.location.href = "./index.html"

          try {
                const docRef = await addDoc(collection(db, "users"), {
                  ...userData,
                  uId: user.uid,
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        })
        .catch((error) => {
          console.log(error.message);
          alert(error.code);
        });
    } else {
      alert("Invalid email or Password");
    }
    if (password !== cPassword) {
      alert("Passwords should be identical");
    }
  };

  if(window.location.pathname=="/sign-up.html"){
      let signUp_btn = document.getElementById("signUp_btn");
      signUp_btn.addEventListener("click", signUp);
  }


// login

  let logIn = () => {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       alert("Login Successful")
       window.location.href = "./index.html"
      })
      .catch((error) => {
        alert(error.code)
      });
  };
  if(window.location.pathname=="/index.html"){
  let login_btn = document.getElementById("login_btn");
  login_btn.addEventListener("click", logIn);
  }





  let googleSignup=()=>{
      signInWithPopup(auth, provider)
      .then((result) => {
       
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
       console.log(user);
       window.location.href = "./class27/index.html"
  
      }).catch((error) => {
        
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(email, credential);
      });
  }
  if(window.location.pathname=="/index.html"){
      let googleBtn = document.getElementById("googleBtn");
      googleBtn.addEventListener("click", googleSignup);
  }




