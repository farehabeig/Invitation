import "../scss/createEvent.scss";
import { Link } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import { useState } from "react";
import { IMAGES } from "../config/images";
const CreateEvents = () => {
    const [value, onChange] = useState(new Date());

    const [imageToSrc, setImageToSrc] = useState();
    console.log(imageToSrc);

    return (
        <section className="create-sec">
            <div className="container">
                <div className="col center">
                    <div className="content">
                        <div className="heading">
                            <h2>
                                Name Your <span>Event</span>
                            </h2>
                        </div>
                        <p>Woahh!! You can now create your personalized events, anytime, anywhere!! ️‍🔥️‍🔥</p>
                    </div>
                    <form>
                        <div className="input_field">
                            <label>Event name</label>
                            <input type="text"></input>
                        </div>
                        <div className="input_field">
                            <label>Host name</label>
                            <input type="text"></input>
                        </div>
                        <div className="input_field">
                            <label>Select Date and Time</label>
                            <DateTimePicker onChange={onChange} value={value} />
                        </div>
                        <div className="input_field">
                            <label>Location</label>
                            <input type="text"></input>
                        </div>
                        <div className="input_field">
                            <label>Upload Image</label>
                            <div className="upload_img_div">
                                <div className="img_box_main_label">
                                    <label class="file_upload_button">
                                        <IMAGES.EditCategoryPic />
                                        <span className="image-btn">
                                            <input
                                                type="file"
                                                id="imgInp"
                                                class="img-btn"
                                                onChange={(e) => {
                                                    let file = e.target?.files[0];
                                                    if (!file) {
                                                        return;
                                                    }
                                                    let reader = new FileReader();
                                                    let image = new Image();
                                                    reader.onload = (_) => {
                                                        image.src = reader.result;
                                                    };
                                                    reader.readAsDataURL(file);
                                                    setImageToSrc(image.src);
                                                    console.log(image.src);
                                                }}
                                                value={imageToSrc}
                                            />
                                        </span>
                                    </label>
                                    <div className="img_box">{imageToSrc && <img src={imageToSrc} alt="upload" />}</div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="action-btn">
                        <Link to="/event">
                            <button className="create-btn">Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CreateEvents;
