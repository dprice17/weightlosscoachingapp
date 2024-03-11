import React from 'react';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import UserInputPage from './components/UserInputPage.jsx'

export default function App() {
  
   const [ btnClicked, setBtnClicked ] = React.useState({
        addBtn: false,
        generateBtn: false
      })
    
   
   const handleAddBtn = () => {
       setBtnClicked(prev => {
        return {  
            ...prev,
            addBtn: true
        }
      })
   }
   
   const handleGenerateBtn = () => {
      setBtnClicked(prev => {
          return {
              ...prev,
              generateBtn: true
          }
      }) 
   }
   
   
  return (
    <div className="container">
      <Header />
        <UserInputPage 
          btnClicked={btnClicked}
          handleAddBtn={handleAddBtn}
          handleGenerateBtn={handleGenerateBtn}
        />
      <Footer />
    </div>
  )
}



