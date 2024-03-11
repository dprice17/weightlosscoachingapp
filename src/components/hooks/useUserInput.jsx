import React from "react";

export default function useUserInput(isAddBtnClicked) {
  const [userInput, setUserInput] = React.useState("");
  const [userInputField, setUserInputField] = React.useState("");
  const [generateBtnDisabled, setGenerateBtnDisabled] = React.useState(true);
  const [renderUserInputContainerMessage, setRenderUserInputContainerMessage] =
    React.useState(<p>Your question will appear here</p>);

  const handleUserInput = (event) => {
    let userInput = event.target.value;
    setUserInput(userInput);
    setUserInputField(userInput);
  };

  React.useEffect(() => {
    if (userInputField.length === 0) {
      setRenderUserInputContainerMessage(<p>Your question will appear here</p>);
    } else if (userInputField.length > 0) {
      setRenderUserInputContainerMessage(
        <p className="click-plus-button-message">
          When you're done, click the
          <span className="click-plus-button-message-span">+</span> button.
        </p>
      );
    }
  }, [userInputField, isAddBtnClicked]);

  const verifyQuestion = () => {
    const questionWords = [
      "who",
      "what",
      "where",
      "when",
      "why",
      "how",
      "is",
      "are",
      "am",
      "was",
      "were",
      "do",
      "does",
      "did",
      "should",
      "can",
    ];
    const lastCharQuestionMark = userInput.charAt(userInput.length - 1) === "?";
    const words = userInput.toLowerCase().split(" ");
    const questionWordInUserInput = words.some((word) =>
      questionWords.includes(word)
    );

    return lastCharQuestionMark && questionWordInUserInput;
  };

  React.useEffect(() => {
    const questionVerified = verifyQuestion();

    if (isAddBtnClicked) {
      if (userInputField.length === 0) {
        setRenderUserInputContainerMessage(
          <p className="warning-message">
            You must ask your weight loss coach a question.
          </p>
        );
      } else if (userInputField.length > 0 && !questionVerified) {
        setRenderUserInputContainerMessage(
          <p className="warning-message">
            Please ask your weight loss coach a question. Your question must end
            with a question mark.
          </p>
        );
      } else if (userInputField.length > 0 && questionVerified) {
        setGenerateBtnDisabled(false);
        setRenderUserInputContainerMessage(<p>{userInput}</p>);
      } else {
        setGenerateBtnDisabled(true);
      }
    }
  }, [isAddBtnClicked, userInputField]);

  const clearUserInputField = () => {
    setUserInputField("");
  };

  return {
    userInput,
    setUserInput,
    userInputField,
    handleUserInput,
    renderUserInputContainerMessage,
    setRenderUserInputContainerMessage,
    generateBtnDisabled,
    setGenerateBtnDisabled,
    clearUserInputField,
  };
}
