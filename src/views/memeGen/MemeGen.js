import React from 'react'
import NavBarMemGen from '../../components/NavBarforGenMem'
import default_img from '../../images/default_img.svg'
import undo from '../../images/icons/undo.svg'
import redo from '../../images/icons/redo.svg'
import minus from '../../images/icons/minus.svg'
import plus from '../../images/icons/plus.svg'
import textIcon from '../../images/icons/text-icon.svg'
import cropIcon from '../../images/icons/crop-icon.svg'
import cutIcon from '../../images/icons/cut-icon.svg'
import tagsIcon from '../../images/icons/tags-icon.svg'
import downloadIcon from '../../images/icons/download-icon.svg'
import addImage from '../../images/addImage.svg'
import chosseTem from '../../images/chooseTemp.svg'

/* memegen.css */
import './MemeGen.css'

export default function MemeGen() {

    const openFileInput = ()=>{
        document.querySelector('#image_upload').click()
    }
    return (
        <>
            <NavBarMemGen />
            {/* meme generator */}
            <div className='editor'>
                <img src={default_img} className='demo_editor_img' alt='demo-img' />
            </div>
            {/* editor setion  */}
            <div className='undo-redo-zoom'>
                <div className='undo-redo-container'>
                    <div className='undo-container'>
                        <img src={undo} alt="undo" />
                        <span className='undo'>Undo</span>
                    </div>
                    <div className='redu-container'>
                        <img src={redo} alt="redo" />
                        <span className='undo'>Redo</span>
                    </div>
                </div>
                <div className='zoom-slider'>
                    <input type='range' id="zoom_range" max={100} min={0}/>
                    <div className='plus_minus_icon'>
                        <img className='icon_scale' src={minus} alt="minus"/>
                        <img className='icon_scale' src={plus} alt="plus"/>
                    </div>
                </div>
            </div>

            {/* add image and select template section */}
            <div className='select_image_template'>
                <input type="file" accept='image/*' id="image_upload" hidden />
                <div className='select_image' onClick={openFileInput}>
                    <img src={addImage} alt="selectImg"/>
                    <span className='select_img_tem_text'>Select Photo</span>
                </div>
                <div className='select_template'>
                    <img src={chosseTem} alt="selectTem"/>
                    <span className='select_img_tem_text'>Choose a Template</span>
                </div>
            </div>

            {/* editor option */}
            <div className='edit_option'>
                <div className='editior-option-container'>
                <div className='text_icon'>
                    <img src={textIcon} alt="text-img"/>
                    <span className='icon-name'>Text</span>
                </div>
                <div className='text_icon'>
                    <img src={cropIcon} alt="text-img"/>
                    <span className='icon-name'>Crop</span>
                </div>
                <div className='text_icon'>
                    <img src={cutIcon} alt="text-img"/>
                    <span className='icon-name'>Cut</span>
                </div>
                <div className='text_icon'>
                    <img src={tagsIcon} alt="text-img"/>
                    <span className='icon-name'>Tags</span>
                </div>
                <div className='text_icon'>
                    <img src={downloadIcon} alt="text-img"/>
                    <span className='icon-name'>Save</span>
                </div>
                </div>
                
            </div>
        </>
    )
}
