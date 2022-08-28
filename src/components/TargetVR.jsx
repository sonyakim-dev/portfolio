import React, {useState} from 'react'
import { Modal, Box, Typography } from '@mui/material';
import { CgCloseO } from 'react-icons/cg'
import YouTube from 'react-youtube';

function TargetVR() {
  console.log('Target VR')
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{background:'white', height:'100%', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
          <div className='absolute bg-black right-0 py-5'>
            <CgCloseO size={30} onClick={() => setOpen((prev) => !prev)}/>
          </div>
          <p>Grab a tool and hit the target in the given time. When you hit a target, a new target will be initiated.</p>
          <YouTube videoId="MZOsNSwsS9g" opts={{height:'820', width:'1240'}}/>
        </Box>
      </Modal>
    </div>
  )
}

export default TargetVR