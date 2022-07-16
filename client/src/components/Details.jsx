import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Profile from '../image/img_avatar.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Details = ({open,handleClose,formData}) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <img src={Profile} width='300px'/>
            <h3 className='mt-3'>Name: <span style={{fontWeight : 400}}>{formData.username}</span></h3>
            <h3 className='mt-3'>Age: <span style={{fontWeight : 400}}>{formData.age}</span></h3>
            <p><MailOutlineIcon /> Email: <span>{formData.email}</span></p>
            <p><WorkIcon /> Occuption: <span>{formData.work}</span></p>
            <p><PhoneAndroidIcon /> Phone: <span>{formData.mobile}</span></p>
            <p><LocationOnIcon /> Address: <span>{formData.address}</span></p>
            <p><h5>Description</h5>{formData.des}</p>
          </CardContent>
         </Card>
        </Box>
      </Modal>
    </div>
  )
}

export default Details

