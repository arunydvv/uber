import React from 'react'
const UserContext = ({ children }) => {
    const [user, setuser] = useState({
        email: '',
        fullname: {
            firstname: '',
            lastname: ''
        }
    })
    return (
        <div>
            <UserDataContext.Provider value={[user, setuser ]}>
                {children}
            </UserDataContext.Provider>
      </div>
  )
}

export default UserContext