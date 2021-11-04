import React from "react";
import UserService from "../../services/user.service";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function(url) {
    return '<a href="' + url + '">' + url + '</a>';
  })
  // or alternatively
  // return text.replace(urlRegex, '<a href="$1">$1</a>')
}
const Open = () => {
  const [resume, setResume] = useState([])
  const [loadingResume, setLoadingResume]= useState(false)

  let { name } = useParams();

  useEffect(() => {
    UserService.getOpenResume(name).then(
      (response) => {
        setResume(response.data)
        setLoadingResume(true)
      }); 
  }, []);

  return (
    <div className="container"> 
      {loadingResume ? (  <div>{ ReactHtmlParser(resume[0].resume) }</div>
        ):(<p>loadingUser</p>)}
    </div>
  );
};

export default Open;
