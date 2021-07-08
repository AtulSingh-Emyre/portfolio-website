import reactStringReplace from 'react-string-replace';


export const parseNewLine = object => {
    //const regexNewLine=/@(\w+)/g
    const newLineMatch = (match, index, offset) => {
      return (<br key={index} />);
    }
    return reactStringReplace(object, "<br/>", newLineMatch)

}