import React, {  useEffect, useState } from "react";
import Splitter from "./Splitter";
import { useResizable } from "react-resizable-layout";
import { cn } from "../utils/cn";
import TableComponent from "./TableComponent";
import FormComponent from "./FormComponent";
import { addData, getData, updateData } from "../api/Apis";

const ResizableComponent = () => {
    const [tableData, setTableData] = useState([]);
    const [count, setCount] = useState([]);
    const [formData, setFormData] = useState({ id: "", firstName: "", lastName: "", email: "" });

    const {
        isDragging: isTerminalDragging,
        position: terminalH,
        splitterProps: terminalDragBarProps
    } = useResizable({
        axis: "y",
        initial: 300,
        min: 250,
        reverse: true
    });
    const {
        isDragging: isPluginDragging,
        position: pluginW,
        splitterProps: pluginDragBarProps
    } = useResizable({
        axis: "x",
        initial: 500,
        min: 250,
        reverse: false
    });

    const fetchData = async () => {
        try {
            const response = await getData();
            if (response.success) {
                setTableData(response.data);
                setCount(response.addUpdateCount)
            } else {
                console.error("Error fetching data:", response.error);
            }
        } catch (error) {
            console.error("An unexpected error occurred:", error);
        }
    };

    const handleSubmit = async (formData) => {
        try {
            if (formData.id) {
                await updateData(formData);
                setTableData(prevData =>
                    prevData.map(item => (item._id === formData.id ? formData : item))
                );
                setFormData({ id: "", firstName: "", lastName: "", email: "" });
                setCount(count + 1);
                // fetchData();
            } else {
                await addData(formData);
                setTableData([...tableData, formData]);
                setFormData({ id: "", firstName: "", lastName: "", email: "" });
                setCount(count + 1);
                // fetchData();
            }
            fetchData();
        } catch (error) {
            console.error("An unexpected error occurred:", error);
        }
    }

    
    useEffect(() => {
        fetchData();
    },[]); 
    
    const handleEditButtonClick = (item) => {
        console.log(item._id);
        setFormData({ id: item._id, firstName: item.firstName, lastName: item.lastName, email: item.email });
    }

    const handleFormChange = (updatedFormData) => {
        setFormData(updatedFormData);
    }
    return (
        <div className={"flex flex-column h-screen bg-dark font-mono color-white overflow-hidden"}>
            <div className={"flex grow"}>
                
                <div
                    className={cn("shrink-0 contents", isPluginDragging && "dragging")}
                    style={{ width: pluginW }}
                >
                    <FormComponent formData={formData} onFormChange={handleFormChange} onSubmit={handleSubmit} />
                </div>
                <Splitter
                    isDragging={isPluginDragging}
                    {...pluginDragBarProps}
                />
                <div className={"grow bg-darker contents"}>
                DataNeuron Reception
                <h1>Calling Count = {count}</h1>
                </div>
            </div>
            <Splitter
                dir={"horizontal"}
                isDragging={isTerminalDragging}
                {...terminalDragBarProps}
            />
            <div
                className={cn(
                    "shrink-0 bg-darker contents",
                    isTerminalDragging && "dragging"
                )}
                style={{ height: terminalH }}
            >
                <TableComponent data={tableData} onEditButtonClick={handleEditButtonClick} />
            </div>
        </div>
    );
};

export default ResizableComponent;
