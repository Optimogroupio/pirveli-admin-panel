import React, {useState, useEffect} from 'react';
import {TreeTable} from 'primereact/treetable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {ServiceService} from '../service/ServiceService';
import '../style/TreeTable.css'

const ServiceTreeTable = () => {
    const [nodes, setNodes] = useState([]);
    const serviceService = new ServiceService();

    useEffect(() => {
        serviceService.getServices().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const actionTemplate = (node, column) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    const header = "File Viewer";
    const footer = <div style={{textAlign: 'left'}}><Button icon="pi pi-refresh" tooltip="Reload"/></div>;

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes} header={header} footer={footer}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="" header="Price"></Column>
                    <Column field="" header="Type"></Column>
                    <Column></Column>
                    <Column body={actionTemplate} style={{textAlign: 'center', width: '10rem'}}/>
                </TreeTable>
            </div>
        </div>
    );
}
export default React.memo(ServiceTreeTable);
