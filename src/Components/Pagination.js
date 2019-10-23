import React from "react";
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';

const Pagination = ( { postsPerPage, totalPosts, paginate, next, prev, currentPage, totalPages } ) => {
  
  return(
    <nav>
    <MobileStepper
            steps={totalPages}
            position="static"
            variant="text"
            activeStep={ currentPage - 1 }
            nextButton={
              <Button size="small" onClick={()=>{next(totalPages)}} >
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button size="small" onClick={()=>{prev()}} >
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
    </nav>
  )
}

export default Pagination
