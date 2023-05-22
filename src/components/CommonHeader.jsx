import React from 'react';

const CommonHeader = ({headingName,page1,page2,page3}) => {
    return (  
        <>
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">{headingName}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a className="text-white" href="#">{page1}</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">{page2}</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">{page3}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
 
export default CommonHeader;