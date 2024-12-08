import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  useEdgesState,
  useNodesState,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";

const nodeStyles = {
  input: {
    background: "#FFD700",
    color: "#000",
    border: "2px solid #FF8C00",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "14px",
  },
  default: {
    background: "#87CEEB",
    color: "#000",
    border: "2px solid #1E90FF",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "14px",
  },
  output: {
    background: "#32CD32",
    color: "#000",
    border: "2px solid #006400",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "14px",
  },
};

const edgeStyles = {
  default: { stroke: "#FF6347", strokeWidth: 2 },
};

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "User" },
    position: { x: 100, y: 100 },
    style: nodeStyles.input,
  },
  {
    id: "2",
    data: { label: "Login" },
    position: { x: 300, y: 100 },
    style: nodeStyles.default,
  },
  {
    id: "3",
    data: { label: "Registration" },
    position: { x: 300, y: 200 },
    style: nodeStyles.default,
  },
  {
    id: "4",
    data: { label: "Validation" },
    position: { x: 500, y: 100 },
    style: nodeStyles.default,
  },
  {
    id: "5",
    data: { label: "Home" },
    position: { x: 700, y: 100 },
    style: nodeStyles.default,
  },
  {
    id: "6",
    data: { label: "ML Model" },
    position: { x: 300, y: 300 },
    style: nodeStyles.default,
  },
  {
    id: "7",
    data: { label: "Test" },
    position: { x: 700, y: 200 },
    style: nodeStyles.default,
  },
  {
    id: "8",
    data: { label: "Image Upload" },
    position: { x: 500, y: 200 },
    style: nodeStyles.default,
  },
  {
    id: "9",
    data: { label: "Flask Server" },
    position: { x: 500, y: 300 },
    style: nodeStyles.default,
  },
  {
    id: "10",
    data: { label: "Server" },
    position: { x: 900, y: 100 },
    style: nodeStyles.default,
  },
  {
    id: "11",
    data: { label: "Doctor Suggestion System" },
    position: { x: 1100, y: 100 },
    style: nodeStyles.output,
  },
  {
    id: "12",
    data: { label: "Result Output" },
    position: { x: 900, y: 200 },
    style: nodeStyles.output,
  },
  {
    id: "13",
    data: { label: "Predict" },
    position: { x: 700, y: 300 },
    style: nodeStyles.default,
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", style: edgeStyles.default },
  { id: "e1-3", source: "1", target: "3", style: edgeStyles.default },
  { id: "e2-4", source: "2", target: "4", style: edgeStyles.default },
  { id: "e4-5", source: "4", target: "5", style: edgeStyles.default },
  { id: "e3-6", source: "3", target: "6", style: edgeStyles.default },
  { id: "e5-7", source: "5", target: "7", style: edgeStyles.default },
  { id: "e7-8", source: "7", target: "8", style: edgeStyles.default },
  { id: "e8-9", source: "8", target: "9", style: edgeStyles.default },
  { id: "e5-10", source: "5", target: "10", style: edgeStyles.default },
  { id: "e10-11", source: "10", target: "11", style: edgeStyles.default },
  { id: "e7-12", source: "7", target: "12", style: edgeStyles.default },
  { id: "e9-13", source: "9", target: "13", style: edgeStyles.default },
  { id: "e13-11", source: "13", target: "11", style: edgeStyles.default },
  { id: "e13-12", source: "13", target: "12", style: edgeStyles.default },
];

function Diagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ height: "100vh", background: "#f0f8ff" }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          onLoad={(instance) => setReactFlowInstance(instance)}
          style={{ background: "#ffffff" }}
        >
          <Background color="#ddd" gap={16} />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

export default Diagram;
