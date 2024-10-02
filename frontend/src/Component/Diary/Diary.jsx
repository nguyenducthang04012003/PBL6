import React, { useEffect, useState } from 'react';
import TextEditor from '../UtilComponent/TextEditor';
import TaskbarTop from '../../Share/Taskbar_Top/TaskbarTop';
import axios from 'axios'
import './Diary.css';

const Diary = () => {
    const [diaryContent, setDiaryContent] = useState('');
    const [imageUrls, setImageUrls] = useState([]);

    const handleChange = (content, images) => {
        setDiaryContent(content);
        setImageUrls(images)
        console.log('Updated Diary Content:', diaryContent);
        console.log('Updated Image Content:', imageUrls);
    };
    
    const handleImage = (images) => {
        setImageUrls(images)
    }

    useEffect(() => {
        console.log('Updated Diary Content:', diaryContent);
        console.log('Updated Image Content:', imageUrls);
    }, [diaryContent, imageUrls]);

    function removeHtmlTags(input) {
        return input.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    }

    const handleSubmit = async () => {
        try {
            console.log({  // Update the URL here
                content: removeHtmlTags(diaryContent),
                images: imageUrls,
                date: new Date().toISOString(),
            })
            const response = await axios.post('http://localhost:5000/predict', {  // Update the URL here
                text: removeHtmlTags(diaryContent),
                // images: imageUrls,
                // date: new Date().toISOString(),
            });
            console.log('Response from API:', response.data);
        } catch (error) {
            console.error('Error posting diary entry:', error);
        }
    };

    return(
        <div>
            <div className="background">
                <img src="/Image/notebook_bg.jpg"></img>
                <div className="black-overlay"></div>
            </div>
            <TaskbarTop/>
            <div className="diary-container">
                <div className="diary-header">
                    <img className="diary-character" src="/Image/diary_character.png"></img>
                    <img className="diary-conversation-box" src="/Image/conversation_box.png"></img>
                    <div className="diary-line">Ngày hôm nay của bạn thế nào</div>
                    <div className="diary-date"><span style={{marginRight: '20px',}}>Ngày:</span>24/09/2024</div>
                </div>
                <TextEditor onChange={handleChange} onImageChange={handleImage}/>
            </div>
            <div className="diary-footer">
                <div className="diary-button" onClick={handleSubmit}>
                    Hoàn thành
                </div>
            </div>
        </div>
    )
}

export default Diary;