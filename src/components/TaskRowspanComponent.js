import React from "react";
import Table from "react-bootstrap/Table";

class TaskRowspanComponent extends React.Component {
  constructor(props) {
    super(props);

    let initialState = [
      {
        user_data: [
          {
            amount: 2550,
            time1: "2017/04/05",
            time2: "2017/04/06",
          },
          {
            amount: 2550,
            time1: "2017/04/05",
            time2: "2017/04/06",
          },
        ],
        name: "hulk",
      },
      {
        user_data: [
          {
            amount: 2125,
            time1: "2017/04/05",
            time2: "2017/04/06",
          },
          {
            amount: 1700,
            time1: "2017/04/05",
            time2: "2017/04/06",
          },
          {
            amount: 1700,
            time1: "2017/04/05",
            time2: "2017/04/06",
          },
          {
            amount: 2125,
            time1: "2017/04/05",
            time2: "2017/04/06",
          },
        ],
        name: "gomu",
      },
    ];

    this.state = {
      stateUsers: initialState,
    };
  }

  render() {
    const { stateUsers } = this.state;

    return (
      <div className="setmargin">
        <Table className="tableborder">
          <thead>
            <tr>
              <th>Name</th>
              <th>Time 1</th>
              <th>Time 2</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {stateUsers.map((users) => {
              let totalAmount = 0;

              return (
                <>
                <tr>
                  {<th rowspan={users.user_data.length}>{users.name}</th>}

                  {users.user_data.length > 0 &&
                    users.user_data.map((user, index) => {
                      if (index == 0) {
                          totalAmount=totalAmount+user.amount
                        return (
                          <>
                              <td>{user.time1}</td>
                              <td>{user.time2}</td>
                              <td>{user.amount}</td>
                          </>
                        );
                      }
                    })}
                </tr>

                    {users.user_data.length > 0 &&
                    users.user_data.map((user, index) => {
                      if (index > 0) {
                        totalAmount=totalAmount+user.amount
                        return (
                          <>
                              <tr>
                              <td>{user.time1}</td>
                              <td>{user.time2}</td>
                              <td>{user.amount}</td>
                              </tr>
                          </>
                        );
                      }
                    })}


                  <tr>
                    <th colspan="3">Total</th>
                    <td><strong>{totalAmount}</strong></td>
                  </tr>
                </>

              );
            })}
            
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TaskRowspanComponent;
//  <td rowSpan={studentDetails.studentReceiptHistory.length}>{studentDetails.RollNo}</td>
//                         <td rowSpan={studentDetails.studentReceiptHistory.length}>{studentDetails.FirstName} {studentDetails.LastName}</td>
//                         <td rowSpan={studentDetails.studentReceiptHistory.length}>{studentDetails.Caste}</td> */}

//                         {Object.values(studentDetails).length>0 &&
//                           Object.values(studentDetails.studentReceiptHistory).map((data,index)=>{
//                               if(index==0){
//                            return (<><td>{data.receiptNumber}</td><td>{data.paymentDate}</td></>)}})
//                           }
               
//                          </tr>
//                          {Object.values(studentDetails).length > 0 &&
//                           Object.values(studentDetails.studentReceiptHistory).map((data,index)=>{
//                            if(index>0){ 
//                            return (<tr><td>{data.receiptNumber}</td><td>{data.paymentDate}</td></tr>)}})
//                           }
                
                         
                  