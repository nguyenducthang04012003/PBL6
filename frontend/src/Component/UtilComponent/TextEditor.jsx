import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import uploadFile from '../../api/uploadImage';

const images = []

const uploadImage = async function () {
    let fileInput;
    if (fileInput == null) {
        fileInput = document.createElement('input');
        fileInput.setAttribute('type', 'file');
        fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
        fileInput.classList.add('ql-image');

        fileInput.addEventListener('change', async () => {
            if (fileInput.files != null && fileInput.files[0] != null) {
                const file = fileInput.files[0];

                try {
                    const res = await uploadFile(file);
                    const url = res;

                    const imgElement = document.createElement('img');
                    imgElement.src = url;
                    imgElement.alt = 'photo';
                    imgElement.style.width = '250px';
                    imgElement.style.margin = '5px';

                    const imagesContainer = document.getElementById('imagesContainer');
                    if (imagesContainer) {
                        imagesContainer.appendChild(imgElement);
                    }

                    images.push(url);
                    console.log('Image URL:', url);
                } catch (err) {
                    console.error(err);
                }
            }
        });
    }

    fileInput.click();
}


const TextEditor = ({onChange, onImageChange}) => {
    const handleChange = (content) => {
        setValue(content);
        currentImages = images;
        onChange(content, images);
        console.log('Current Editor Content:', content);
        console.log('Current Editor Content:', images);
    };
    
    const handleImage = () => {
        currentImages = images;
        onImageChange(images);
    }

    useEffect(() => {
        const interval = setInterval(handleImage, 1000);

        return () => clearInterval(interval);
    }, [images]); // Depend on images to update if they change

    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ font: [] }],
                [{ size: ['small', false, 'large', 'huge'] }], // Thêm tuỳ chọn kích thước
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" }
                ],
                ["link", "image", "video"],
                ["code-block"],
                ["clean"],
            ],
            handlers: {
                image: uploadImage
            }
        },
        clipboard: {
            matchVisual: false,
        },
    }
    const [value, setValue] = useState('');
    let currentImages = []

    return (
        <div>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={handleChange}
                modules={modules}
            />
            <div
                style={{
                    maxHeight: '250px',
                    border: '1px solid #ccc',
                    marginTop: '10px',
                    padding: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <div style={{
                        fontWeight: '500',
                        fontSize: '16px',
                        paddingLeft: '10px'
                    }}>Ảnh của bạn</div>
                <div
                    id="imagesContainer"
                    style={{
                        overflowX: 'auto',
                    }}
                >
                    {/* Images will be appended here */}
                </div>
            </div>
        </div>
    );
}

export default TextEditor;
