import React from "react";
import Table from "react-bootstrap/Table";

class TaskColspanComponent extends React.Component {
  constructor(props) {
    super(props);

    let initialState = {
      data: {
        75997: {
          FirstName: "Alexander",
          LastName: "Grahambell",
          RollNo: "",
          mobileNo: "8547961235",
          email: "alexander@grahambell.com",
          admissionTypeId: "9",
          student_user_id: "STDMENV2117",
          admissionNumber: "1",
          Caste: "OPEN",
          admissionType: "CAP",
          FatherName: "Raj",
          MotherName: "Reshma",
          totalApplicableFees: {
            101: 80000,
          },
          feesByScholarship: [],
          feesByStudent: {
            101: 80000,
          },
          studentReceiptHistory: {
            42388: {
              uniqueId: 42388,
              paymentDate: "05/05/2022",
              receiptNumber: "RS2101-1226",
              feesHistory: {
                101: {
                  type: "fee",
                  feeHeadId: "73799",
                  amount: 80000,
                  currentPaidAmount: 80000,
                },
              },
            },
          },
          scholarshipReceiptHistory: [],
          pendingByScholarship: [],
          pendingByStudent: {
            101: 0,
          },
          totalFeesPaid: {
            101: 80000,
          },
          totalScholarshipPaid: [],
        },
        76601: {
          FirstName: "ram",
          LastName: "kolli",
          RollNo: "",
          mobileNo: "8476979874",
          email: "ram@gmail.com",
          admissionTypeId: "0",
          student_user_id: "STDMENV2118",
          admissionNumber: "",
          Caste: "SC",
          admissionType: "",
          FatherName: "srinu",
          MotherName: "kolli",
          totalApplicableFees: {
            101: 80000,
          },
          feesByScholarship: [],
          feesByStudent: {
            101: 80000,
          },
          studentReceiptHistory: {
            42389: {
              uniqueId: 42389,
              paymentDate: "05/05/2022",
              receiptNumber: "RS2101-1227",
              feesHistory: {
                101: {
                  type: "fee",
                  feeHeadId: "73800",
                  amount: 80000,
                  currentPaidAmount: 40000,
                },
              },
            },
          },
          scholarshipReceiptHistory: [],
          pendingByScholarship: [],
          pendingByStudent: {
            101: 40000,
          },
          totalFeesPaid: {
            101: 40000,
          },
          totalScholarshipPaid: [],
        },
        89068: {
          FirstName: "shruti",
          LastName: "gayakwad",
          RollNo: "10",
          mobileNo: "8979896543",
          email: "shrutig@gmail.com",
          admissionTypeId: "168",
          student_user_id: "STDMENV2191",
          admissionNumber: "11",
          Caste: "",
          admissionType: "Sports ",
          FatherName: "dilip",
          MotherName: "lata",
          totalApplicableFees: [],
          feesByScholarship: [],
          feesByStudent: [],
          studentReceiptHistory: [],
          scholarshipReceiptHistory: [],
          pendingByScholarship: [],
          pendingByStudent: [],
          totalFeesPaid: [],
          totalScholarshipPaid: [],
        },
        89614: {
          FirstName: "Rahul",
          LastName: "Dravid",
          RollNo: "1",
          mobileNo: "7757412521",
          email: "rahul18@gmail.com",
          admissionTypeId: "227",
          student_user_id: "STDMENV21136",
          admissionNumber: "2311",
          Caste: "",
          admissionType: "SPORTS",
          FatherName: "Sharad",
          MotherName: "Mina",
          totalApplicableFees: {
            106: 1000,
            311: 1000,
          },
          feesByScholarship: [],
          feesByStudent: {
            106: 1000,
            311: 1000,
          },
          studentReceiptHistory: {
            41018: {
              uniqueId: 41018,
              paymentDate: "27/04/2022",
              receiptNumber: "RS2101-1213",
              feesHistory: {
                311: {
                  type: "fee",
                  feeHeadId: 108768,
                  amount: 1000,
                  currentPaidAmount: 1000,
                  typeID: "311",
                },
              },
            },
            41444: {
              uniqueId: 41444,
              paymentDate: "29/04/2022",
              receiptNumber: "RS2101-1220",
              feesHistory: {
                106: {
                  type: "fee",
                  feeHeadId: 111315,
                  amount: 1000,
                  currentPaidAmount: 1000,
                  typeID: 106,
                },
              },
            },
          },
          scholarshipReceiptHistory: [],
          pendingByScholarship: [],
          pendingByStudent: {
            106: 0,
            311: 0,
          },
          totalFeesPaid: {
            106: 1000,
            311: 1000,
          },
          totalScholarshipPaid: [],
        },
        103949: {
          FirstName: "Shivam",
          LastName: "Singh",
          RollNo: "",
          mobileNo: "8329244580",
          email: "ashish.gole@corp.vmedulife.com",
          admissionTypeId: "9",
          student_user_id: "STDMENV21158",
          admissionNumber: "0",
          Caste: "",
          admissionType: "CAP",
          FatherName: "",
          MotherName: "",
          totalApplicableFees: [],
          feesByScholarship: [],
          feesByStudent: [],
          studentReceiptHistory: [],
          scholarshipReceiptHistory: [],
          pendingByScholarship: [],
          pendingByStudent: [],
          totalFeesPaid: [],
          totalScholarshipPaid: [],
        },
        109376: {
          FirstName: "Vinyaka",
          LastName: "",
          RollNo: "",
          mobileNo: "9890963514",
          email: "Vinayak@gmail.com",
          admissionTypeId: "0",
          student_user_id: "STDMENV21174",
          admissionNumber: "",
          Caste: "",
          admissionType: "",
          FatherName: "",
          MotherName: "",
          totalApplicableFees: {
            101: 10000,
            170: 5000,
            778: 50,
          },
          feesByScholarship: {
            170: 5000,
          },
          feesByStudent: {
            101: 10000,
          },
          studentReceiptHistory: [],
          scholarshipReceiptHistory: [],
          pendingByScholarship: {
            170: 0,
          },
          pendingByStudent: {
            101: 0,
          },
          totalFeesPaid: [],
          totalScholarshipPaid: [],
        },
        111877: {
          FirstName: "vjhv",
          LastName: "",
          RollNo: "",
          mobileNo: "7554813449",
          email: "vgdjsv@gmail.com",
          admissionTypeId: "0",
          student_user_id: "STDMENV21177",
          admissionNumber: "",
          Caste: "",
          admissionType: "",
          FatherName: "",
          MotherName: "",
          totalApplicableFees: {
            101: 10000,
            102: 5000,
            104: 1000,
            170: 444,
            174: 4342,
            229: 10000,
          },
          feesByScholarship: {
            170: 444,
            174: 4342,
            229: 10000,
          },
          feesByStudent: {
            101: 10000,
            104: 1000,
          },
          studentReceiptHistory: [],
          scholarshipReceiptHistory: [],
          pendingByScholarship: {
            170: 0,
            174: 0,
            229: 0,
          },
          pendingByStudent: {
            101: 0,
            104: 0,
          },
          totalFeesPaid: [],
          totalScholarshipPaid: [],
        },
        113461: {
          FirstName: "Test Manish",
          LastName: "Manish",
          RollNo: "",
          mobileNo: "9421793118",
          email: "myeole26@gmail.in",
          admissionTypeId: "0",
          student_user_id: "STDMENV21189",
          admissionNumber: "",
          Caste: "",
          admissionType: "",
          FatherName: "",
          MotherName: "",
          totalApplicableFees: [],
          feesByScholarship: [],
          feesByStudent: [],
          studentReceiptHistory: [],
          scholarshipReceiptHistory: [],
          pendingByScholarship: [],
          pendingByStudent: [],
          totalFeesPaid: [],
          totalScholarshipPaid: [],
        },
      },
      sortedIdArray: [
        "75997",
        "76601",
        "103949",
        "109376",
        "111877",
        "113461",
        "89614",
        "89068",
      ],
      success: "true",
      feeHeads: {
        101: {
          headId: 101,
          headName: "Tution Fee1",
          type: "fee",
        },
        104: {
          headId: 104,
          headName: "Library Fee",
          type: "fee",
        },
        106: {
          headId: 106,
          headName: "Event Fee",
          type: "fee",
        },
        311: {
          headId: 311,
          headName: "Uni Fee",
          type: "fee",
        },
      },
      totalCount: 4,
    };

    this.state = {
      stateStudentFees: initialState,
    };
  }
  render() {
    const { stateStudentFees } = this.state;
    console.log("stateStudentFees=>", stateStudentFees.feeHeads);
    console.log("HeadNames=>", Object.keys(stateStudentFees.feeHeads));

    return (
      <>
        <Table striped bordered hover size="sm" className="table-setborder">
          <thead>

            <tr>
              <th rowSpan="2">Roll No</th>
              <th rowSpan="2">Student Name</th>
              <th rowSpan="2">Category</th>
              {
                <th colSpan={Object.keys(stateStudentFees.feeHeads).length + 3}>
                  Fees received by student
                </th>
              }
            </tr>

            <tr>
              <th>Receipt Number</th>
              <th>Received Fees Date</th>
              {Object.values(stateStudentFees.feeHeads).map((feeheader) => {
                return <th>{feeheader.headName}</th>;
              })}
              <th>Total Fees</th>
            </tr>

          </thead>



          <tbody>

            {Object.values(stateStudentFees.data).map((studentDetails) => {
              console.log(
                "length=>",
                studentDetails.studentReceiptHistory.length
              );
              let totalFees = 0;
              let totalCurrentFees = 0;
              return (
                <>
                  <tr>
                    <td
                      rowSpan={
                        Object.keys(studentDetails.studentReceiptHistory)
                          .length > 0
                          ? Object.keys(studentDetails.studentReceiptHistory)
                              .length
                          : 1
                      }
                    >
                      {studentDetails.RollNo}
                    </td>
                    <td
                      rowSpan={
                        Object.keys(studentDetails.studentReceiptHistory)
                          .length > 0
                          ? Object.keys(studentDetails.studentReceiptHistory)
                              .length
                          : 1
                      }
                    >
                      {studentDetails.FirstName} {studentDetails.LastName}
                    </td>
                    <td
                      rowSpan={
                        Object.keys(studentDetails.studentReceiptHistory)
                          .length > 0
                          ? Object.keys(studentDetails.studentReceiptHistory)
                              .length
                          : 1
                      }
                    >
                      {studentDetails.Caste}
                    </td>

                    {Object.values(studentDetails.studentReceiptHistory)
                      .length > 0 ? (
                      Object.values(studentDetails.studentReceiptHistory).map(
                        (studData, index) => {
                          if (index == 0) {
                            return (
                              <>
                                <td>{studData.receiptNumber}</td>
                                <td>{studData.paymentDate}</td>

                                {Object.values(stateStudentFees.feeHeads).map(
                                  (feeheader) => {
                                    // console.log("fees key",Object.keys(studData.feesHistory));
                                    // console.log("feesheader headId",feeheader.headId);

                                    let fees =
                                      studData.feesHistory[feeheader.headId] !=
                                      undefined
                                        ? studData.feesHistory[feeheader.headId]
                                        : {};
                                    if (Object.keys(fees).length > 0) {
                                      totalFees =
                                        totalFees + fees.currentPaidAmount; //col total
                                    }
                                    return (
                                      <>
                                        {Object.keys(fees).length > 0 ? (
                                          <>
                                            <td>{fees.currentPaidAmount}</td>
                                          </>
                                        ) : (
                                          <td>0</td>
                                        )}
                                      </>
                                    );
                                  }
                                )}

                                <td>
                                  <strong>{totalFees}</strong>
                                </td>
                              </>
                            );
                          }
                        }
                      )
                    ) 
                    
                    : (
                      <>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </>
                    )}
                  </tr>

                  {Object.values(studentDetails.studentReceiptHistory).length >
                    0 &&
                    Object.values(studentDetails.studentReceiptHistory).map(
                      (studData, index) => {
                        if (index > 0) {
                          return (
                            <tr>
                              <td>{studData.receiptNumber}</td>
                              <td>{studData.paymentDate}</td>

                              {Object.values(
                                studentDetails.studentReceiptHistory
                              ).length > 0 ? (
                                Object.values(
                                  studentDetails.studentReceiptHistory
                                ).map((studData, index) => {
                                  if (index > 0) {
                                    return (
                                      <>
                                        {Object.values(
                                          stateStudentFees.feeHeads
                                        ).map((feeheader) => {
                                          // console.log("fees key",Object.keys(studData.feesHistory));
                                          // console.log("feesheader headId",feeheader.headId);

                                          let fees =
                                            studData.feesHistory[
                                              feeheader.headId
                                            ] != undefined
                                              ? studData.feesHistory[
                                                  feeheader.headId
                                                ]
                                              : {};
                                          if (Object.keys(fees).length > 0) {
                                            totalCurrentFees =
                                              totalCurrentFees +
                                              fees.currentPaidAmount; //from 1st index row-wise total
                                            totalFees =
                                              totalFees +
                                              fees.currentPaidAmount; // column addition
                                          }
                                          return (
                                            <>
                                              {Object.keys(fees).length > 0 ? (
                                                <>
                                                  <td>
                                                    {fees.currentPaidAmount}
                                                  </td>
                                                </>
                                              ) : (
                                                <td>0</td>
                                              )}
                                            </>
                                          );
                                        })}

                                        <td>
                                          <strong>{totalCurrentFees}</strong>
                                        </td>
                                      </>
                                    );
                                  }
                                })
                              ) 
                              
                              : (
                                <>
                                  <td></td>
                                </>
                              )}
                            </tr>
                          );
                        }
                      }
                    )}



                  <tr className="set-border">
                    <td></td>
                    <td></td>
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <strong>{totalFees}</strong>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
}

export default TaskColspanComponent;
