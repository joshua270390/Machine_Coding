// import React from 'react'

// const HighlightText = ({title,search}) => {
 
//     if(!search) return title

//     const splits = title.split(new RegExp(`(${search})`), 'gi')

//   return (
//     <div>
//             {splits.map((part, index) =>
//                 part.toLowerCase() === search.toLowerCase() ? (
//                   <span key={index} style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>
//                     {part}
//                   </span>
//                 ) : (
//                   part
//                 )
//               )}
        
//     </div>
//   )
// }

// export default HighlightText