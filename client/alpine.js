import axios from 'axios';

export default function Login() {
    return {
        user: null,
        password: null,
        user1:null,
        password1:null,
        open: false,
        hide:true,
        register:false,
        passwordError : '',
    

        loggingIn() {
            const user = this.user
            const password = this.password
   
            axios
                .post('http://localhost:3020/api/loggingIn',{user,password})
                .then((quotes) => {
                console.log(quotes.data)
                 if(quotes.data.success==true){
                    localStorage.setItem('storingToken',quotes.data.access_token)
                    console.log('yay')
                    this.open = true
                    this.hide = false
                    this.register = false
                 }
               //   else if(quotes.data.status == 'wrong password'){
               //      this.passwordError = 'Please enter the correct password'
               //      this.password = null
               //   }
               //   else if(quotes.data.status == 'input fields missing'){
               //      this.passwordError = 'Please enter all the input fields'
               //   }
                 else{
                    console.log('register')
                    this.register = true
                    this.registering()
                 }

                })
               //  setTimeout(() =>  { 
               //      this.passwordError = '';
               //    }, 3000);
        
        },
        registering() {
            const user = this.user
            const password = this.password
            axios
                .post('http://localhost:3020/api/addUsers',{user,password})
                .then((quotes) => {
                console.log(quotes.data)
                 if(quotes.data.status==success){
                    console.log('added to db')
                    this.open = true
                    this.hide = false
                    this.register = false
                 }
                 else{
                    console.log('hectic')

                 }

                })
        
        },
    }
}