import React,{Fragment} from 'react'
import ReactDOM from 'react-dom'

import classes from './InfoModal.module.css'
import Button from '../UI/Button'

const Backdrop = (props) =>{
    console.log(props.isShow)
    return(
        <Fragment>
            {props.isShow && <div className={classes.overlay}></div>}
        </Fragment>
    )
}

const ModalOverLay = (props) =>{
    return (
        <Fragment>
            {props.isShow && <div className={classes.content}>
                <div className={classes.header}>
                    <span>Mức lương tối thiểu vùng 2017</span>
                    <Button className={classes.btn} onClick={props.showInfoModalHandler}>X</Button>
                </div>
                <div className={classes.body}>
                    <p><b>- Vùng I</b>: 4.420.000 đồng/tháng</p>
                    <p><b>- Vùng II</b>: 3.920.000 đồng/tháng</p>
                    <p><b>- Vùng III</b>: 3.430.000 đồng/tháng</p>
                    <p><b>- Vùng IV</b>: 3.070.000 đồng/tháng</p>
                    <br/>
                    <br/>
                    <br/>
                    <p><b>- Vùng 1</b>: Hà Nội, Quảng Ninh, Đà Nẵng, Tp.HCM, Bình Dương, Đồng Nai, Vũng Tàu.</p>
                    <p><b>- Vùng 2</b>: Hải Phòng, Vĩnh Phúc, Thái Nguyên, Khánh Hoà, Bình Phước, Tây Ninh, Long An, An Giang, Cần Thơ, Cà Mau.</p>
                    <p><b>- Vùng 3</b>: Hà Tây, Bắc Ninh, Hải Dương, Hưng Yên, Huế, Bình Định, Gia Lai, Đắc Lắc, Lâm Đồng, Ninh Thuận, Bình Thuận, ĐồngTháp, Tiền Giang, Vĩnh Long, Bến Tre, Kiên Giang, Hậu Giang, Sóc Trăng, Bạc Liêu.</p>
                    <p><b>- Vùng 4</b>: là các tỉnh còn lại</p>
                    <br/>
                </div>
            </div>}
        </Fragment>
    )
}

const InfoModal = (props) =>{
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop isShow={props.isShow}/>, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverLay isShow={props.isShow} showInfoModalHandler={props.showInfoModalHandler}/>, document.getElementById("overlay-root"))}
        </React.Fragment>
    )
}

export default InfoModal