import React, {useEffect, useState} from 'react';
import { ApiService } from 'services';

function App() {
    const [studentsTable, setStudentsTable] = useState({})
    const [professorsTable, setProfessorsTable] = useState({})
    const [jobDetails, setJobDetails] = useState({})

  useEffect( ()=>{
        ApiService.getTableStudents()
        .then((res) => {
          setStudentsTable(res);
        })
        .catch(err => {
            console.log('err: ',err)
        });
  }, [])
    useEffect( ()=>{
        ApiService.getTableProfessors()
            .then((res) => {
                setProfessorsTable(res);
            })
            .catch(err => {
                console.log('err: ',err)
            });
    },[])

    const upsertStudent = () => {
        ApiService.upsertStudent({"user":"fdqkbeofnies", "grade":5})
    }

    const upsertProf = () => {
        ApiService.upsertProf({"user":"lsqkeotnnpyu", "subject":"web"})
    }

    const getJobDetails = () => {
        ApiService.getJobDetails().then((res) => {
            setJobDetails(res);
        })
            .catch(err => {
                console.log('err: ',err)
            });
    }


  return (
    <div>
        <div style={{margin:20}}>students: {JSON.stringify(studentsTable)}</div>
        <div style={{margin:20}}>professors: {JSON.stringify(professorsTable)}</div>
        <div style={{margin:20}}>job: {JSON.stringify(jobDetails)}</div>

        <button onClick={upsertStudent}> upsert a student</button>
        <button onClick={upsertProf}> upsert a professor</button>
        <button onClick={getJobDetails}> see job</button>

    </div>
  );
}

export default App;
