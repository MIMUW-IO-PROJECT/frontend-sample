import { useSelector } from "react-redux"

export const MassiveJson = (props) => {
    const curState = useSelector(state => state)
    console.log(curState)

    const toDisplay = JSON.stringify(curState, null, 4);
    const newlines = toDisplay.split(/\r\n|\r|\n/).length;
    return (
        <textarea style={{
            width: "700px",
            marginLeft: "30px",
            marginTop: "50px",
            marginBottom: "30px",
            resize: "none",
            backgroundColor: "#ffccff",
            color: "black"
        }}
            spellCheck="false"
            readOnly
            value={toDisplay}
            rows={newlines - 1}
        />
    );
}