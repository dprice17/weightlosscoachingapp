import React from "react"
import ResponsePage from './ResponsePage.jsx'
import useUserInput from './hooks/useUserInput.jsx' 

export default function UserInputPage(props){
    const { handleAddBtn, handleGenerateBtn, btnClicked } = props
    const [ generateBtnClicked, setGenerateBtnClicked ] = React.useState(btnClicked.generateBtn)
    const [isAddBtnClicked, setIsAddBtnClicked] = React.useState(btnClicked.addBtn)
    
    React.useEffect(() => {
        setIsAddBtnClicked(btnClicked.addBtn)
    },[btnClicked.addBtn])
    
    const { 
            userInput, 
            userInputField, 
            handleUserInput, 
            renderUserInputContainerMessage,
            generateBtnDisabled,
        } = useUserInput(isAddBtnClicked)
    
    
    React.useEffect(() => {
       setGenerateBtnClicked(btnClicked.generateBtn) 
    },[btnClicked.generateBtn])
    
  
    const renderUserInputPage = () => {
        return <main className="main-container" id="main-container">
                <p className="call-to-action">Ask away, any weight loss question, and I'm here to provide you with expert advice.</p>
                
                <div className="user-input-container">
                    <input 
                        id="user-input-field" 
                        className="input-field" 
                        type="text"
                        placeholder="Should I eat another cookie?"
                        onChange={handleUserInput}
                        value={userInputField}
                    />
                    
                    <button 
                        className="add-btn"
                        id="add-btn"
                        onClick={handleAddBtn}
                    >
                        +
                    </button>
                </div>
                
                <div 
                    id="input-response-container" 
                    className="input-response-container"
                >
                    {renderUserInputContainerMessage}
                </div>
                
                <button 
                    style={!generateBtnDisabled ? {color: '#ffffff'} : {color: 'gray'}}
                    className="generate-report-btn" 
                    id="generate-report-btn"
                    disabled={generateBtnDisabled}
                    onClick={handleGenerateBtn}
                >
                    Generate Response
                </button>
                
                <p className="disclaimer-text">
                    <em>Helpful answers 15% of the time!</em>
                </p>
            </main> 
    }
    

   return (
        !generateBtnClicked ? renderUserInputPage()
        : <ResponsePage 
            userInput={userInput} 
        />
      )
}