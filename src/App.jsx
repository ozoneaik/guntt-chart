import './App.css'
import {GanttComponent, Inject, Edit, Selection ,Toolbar } from '@syncfusion/ej2-react-gantt';
import {GanttData} from "./GanttData.js";
import {Filter} from "@syncfusion/ej2-grids";

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    };
    const editSettings = {
        allowEditing: true,
        mode: 'Dialog',
        allowAdding: true,
        allowDeleting: true
    };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'PrevTimeSpan', 'NextTimeSpan', 'ExpandAll', 'CollapseAll', 'Search', 'Indent', 'Outdent'];


    return (
        <GanttComponent dataSource={GanttData} taskFields={taskFields} allowSelection={true} editSettings={editSettings}
                        height='600px' toolbar={toolbarOptions}>
            <Inject services={[Edit, Selection, Toolbar, Filter]} />
        </GanttComponent>
    );

}

export default App
