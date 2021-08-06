import {ButtonCheckbox} from "../../components/Checkbox/Checkbox"


export const Todo = () => {
    return(
        <ButtonCheckbox value="test" onChange={console.log("checked")} id="test" title="Text boxes are cool" note="Course is great"></ButtonCheckbox>
    )
}
