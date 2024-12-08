import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', type: 'input', data: { label: 'User' }, position: { x: 50, y: 50 } },
  { id: '2', data: { label: 'Login' }, position: { x: 200, y: 50 } },
  { id: '3', data: { label: 'Registration' }, position: { x: 200, y: 150 } },
  { id: '4', data: { label: 'Validation' }, position: { x: 400, y: 50 } },
  { id: '5', data: { label: 'Home' }, position: { x: 600, y: 50 } },
  { id: '6', data: { label: 'ML Model' }, position: { x: 200, y: 250 } },
  { id: '7', data: { label: 'Test' }, position: { x: 600, y: 150 } },
  { id: '8', data: { label: 'Image Upload' }, position: { x: 400, y: 150 } },
  { id: '9', data: { label: 'Flask Server' }, position: { x: 400, y: 250 } },
  { id: '10', data: { label: 'Server' }, position: { x: 800, y: 50 } },
  { id: '11', data: { label: 'Doctor Suggestion System' }, position: { x: 1000, y: 50 } },
  { id: '12', data: { label: 'Result Output' }, position: { x: 800, y: 150 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e3-6', source: '3', target: '6' },
  { id: 'e5-7', source: '5', target: '7' },
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e8-9', source: '8', target: '9' },
  { id: 'e5-10', source: '5', target: '10' },
  { id: 'e10-11', source: '10', target: '11' },
  { id: 'e7-12', source: '7', target: '12' },
];

function Diagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default Diagram;
