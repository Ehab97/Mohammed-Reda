import React from 'react'

import { CSVReader } from 'react-papaparse'
import { subtractDate } from '../utlis/index';

const buttonRef = React.createRef()
function AddFile({setData}) {

  const handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e)
    }
  }

  const handleOnFileLoad = (data) => {
  
    let proId = new Set()
    // count project id field
    let project;
    if(data){
       project = data.flatMap((item,index)=>{
        if(index>0){
          let days=subtractDate(item.data[2],item.data[3])
          proId.add(item.data[1])
          let object={
            proId:item.data[1],
            userId:item.data[0],
            days  
          }
          return object
        }
       }) 
    }
    
    const result = [...project.slice(0, 0), ...project.slice(1 + 0)];
    let array = [...proId];
    const map={};
    let tempMap={}
    result.forEach((prod,index) => {
      console.log('test----->',prod,index,map[prod.proId],prod.proId)
      if (map[prod.proId]) {
          map[prod.proId].push(prod);
      } else {
          map[prod.proId] = [prod];
      }
    });
   tempMap= array.map((item,index)=>{
     console.log('sort=>',map[parseInt(item)])
    return map[parseInt(item)].sort((a, b) => a.days - b.days).reverse()
   }) 
   setData(tempMap)
    console.log(data,result,array,map,tempMap,map[1].sort((a, b) => a.days - b.days).reverse())
    console.log('---------------------------')
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  const handleOnRemoveFile = (data) => {
    console.log('---------------------------')
    console.log(data)
    
    console.log('---------------------------')
  }

  const handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e)
    }
  }
  return (
    <div className='center'>
      {/* <input type="file" className="custom-file-input"
             onChange={changeHandler}/> */}
              <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        onRemoveFile={handleOnRemoveFile}
      >
        {({ file }) => (
          <aside
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent:'center',
              marginBottom: 40
            }}
          >
            <button
              type='button'
              onClick={handleOpenDialog}
              // style={{
              //   borderRadius: '8px',
              //   marginLeft: 0,
              //   marginRight: 0,
              //   width: 'auto',
              //   paddingLeft: 0,
              //   paddingRight: 0,
              //   height:'40px'
              // }}
            >
              Browse file
            </button>
            <div
              // style={{
              //   borderWidth: 1,
              //   borderStyle: 'solid',
              //   borderColor: '#ccc',
              //   height: 45,
              //   lineHeight: 2.5,
              //   marginTop: 5,
              //   marginBottom: 5,
              //   paddingLeft: 13,
              //   paddingTop: 3,
              //   width: '60%'
              // }}
            >
              {file && file.name}
            </div>
            <button
              // style={{
              //   borderRadius: '8px',
              //   marginLeft: 0,
              //   marginRight: 0,
              //   width: 'auto',
              //   paddingLeft: 0,
              //   paddingRight: 0,
              //   height:'40px'
              // }}
              onClick={handleRemoveFile}
            >
              Remove
            </button>
          </aside>
        )}
      </CSVReader>
    </div>
  )
}

export default AddFile
