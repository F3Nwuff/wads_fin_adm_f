import createStepsAdd from "./content/add1";
import createStepsMenu from "./content/menu1";
import createStepsTHead from "./content/thead1";
import createStepsTable from "./content/tables";
import { useState, useEffect } from 'react';

const centras = [
    {
      id: 1,
      name: 'User Management',
      batches: [
        { name: 'right1', steps: createStepsMenu },
        { name: 'right2', steps: () => createStepsAdd(1) },
        { name: 'right3', steps: () => createStepsTHead(1) },
        { name: 'right4', steps: () => createStepsTable(1) }
      ]
    },
    {
      id: 2,
      name: 'Centra Management',
      batches: [
        { name: 'right1', steps: createStepsMenu },
        { name: 'right2', steps: () => createStepsAdd(2) },
        { name: 'right3', steps: () => createStepsTHead(2) },
        { name: 'right4', steps: () => createStepsTable(2) }
      ]
    }
  ];

export default centras