import React from "react";
import UserService from "../../services/user.service";
import AuthService from "../../services/auth.service";
import { useState, useEffect} from "react";
import { Editor } from "@tinymce/tinymce-react";
const apiUrl = process.env.NODE_ENV === 'production' ? 'https://yorkriverbookstore.herokuapp.com' : 'http://localhost:8000';

function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function(url) {
    return '<a href="' + url + '">' + url + '</a>';
  })
  // or alternatively
  // return text.replace(urlRegex, '<a href="$1">$1</a>')
}
const Dashboard = () => {
  const [docu, setDocu]= useState('')
  const [user, setUser] = useState([])
  const [loadingUser, setLoadingUser]= useState(false)
  const [resume, setResume] = useState([])
  const [loadingResume, setLoadingResume]= useState(false)


  useEffect(() => {
    UserService.getProfile().then(
      (response) => {
        setUser(response.data)
        setLoadingUser(true)
      }); 
  }, []);

  useEffect(() => {
    UserService.getResume().then(
      (response) => {
        setResume(response.data)
        setLoadingResume(true)
      }); 
  }, []);
  
  const handleEditorChange = (e) => {
    setDocu(e.target.getContent())
  }
  const saveDocu = () => {
    UserService.saveResume(docu, resume[0].id); 
  }
  const logOut = () => {

    AuthService.logout().then(
        () => {
        window.location.href=`${apiUrl}/login`
        }
    )}

  return (
    <div className="container">
       <input id="my-file" type="file" name="my-file" style={{display:"none"}} onChange="" />
      {loadingResume ? (  
        
      <Editor
      apiKey="6xwv4a6paamjsewlvtv93wzd1f4ghfxgfzd80g5qwyhrf7z5"
      initialValue={resume[0].resume}
      init={{
        forced_root_block : false,
        height: 600,
        plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
        toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl| link image',
        file_picker_types: "file image media",
        file_browser_callback_types: 'image',
              file_picker_callback: function (callback, value, meta) {
                if (meta.filetype == 'image') {
                    var input = document.getElementById('my-file');
                    input.click();
                    input.onchange = function () {
                        var file = input.files[0];
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            console.log('name',e.target.result);
                            callback(e.target.result, {
                                alt: file.name
                            });
                        };
                        reader.readAsDataURL(file);
                    };
                }
            },
              paste_data_images: true,
      }}
      onChange={handleEditorChange}
      
      />):(<p>loadingUser</p>)}
      
      <button onClick={saveDocu}>Save</button>
        {loadingUser ? (  
        <>
        <header className="jumbotron">
        <h3>
          <strong>{user[0].name}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {user[0].cid}
      </p>
      <p>
        <strong>City:</strong> {user[0].city}
      </p>
      </>):(<p>loadingUser</p>)}
  
        <button className="nav-link" onClick={logOut}>
                    LogOut
        </button>
    </div>
  );
};

export default Dashboard;
