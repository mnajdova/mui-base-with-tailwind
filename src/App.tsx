import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Select, { SelectOption } from './components/Select';

function App() {
  return (
    <React.Fragment>
    <div className="space-y-3 p-3">
      <div className="space-x-3">
        <Button size="sm">Small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
        <Button variant="bordered" size="sm">Small</Button>
        <Button variant="bordered">Medium</Button>
        <Button variant="bordered" size="lg">Large</Button>
        <Button variant="text" size="sm">Small</Button>
        <Button variant="text">Medium</Button>
        <Button variant="text" size="lg">Large</Button>
      </div>
      <div className="space-x-3">
        <Button color="secondary" size="sm">Small</Button>
        <Button color="secondary">Medium</Button>
        <Button color="secondary" size="lg">Large</Button>
        <Button color="secondary" variant="bordered" size="sm">Small</Button>
        <Button color="secondary" variant="bordered">Medium</Button>
        <Button color="secondary" variant="bordered" size="lg">Large</Button>
        <Button color="secondary" variant="text" size="sm">Small</Button>
        <Button color="secondary" variant="text">Medium</Button>
        <Button color="secondary" variant="text" size="lg">Large</Button>
      </div>
    </div>
    <div className="space-x-3 p-3 flex flex-row">
      <div className="space-y-3 w-[30%]">
        <Input size="sm" placeholder="Name and surname">Small</Input>
        <Input placeholder="Name and surname">Medium</Input>
        <Input size="lg" placeholder="Name and surname">Large</Input>
        <Input variant="bordered" size="sm" placeholder="Name and surname">Small</Input>
        <Input variant="bordered" placeholder="Name and surname">Medium</Input>
        <Input variant="bordered" size="lg" placeholder="Name and surname">Large</Input>
        <Input variant="underlined" size="sm" placeholder="Name and surname">Small</Input>
        <Input variant="underlined" placeholder="Name and surname">Medium</Input>
        <Input variant="underlined" size="lg" placeholder="Name and surname">Large</Input>
      </div>
      <div className="space-y-3 w-[30%]">
        <Input color="secondary" placeholder="Name and surname" size="sm">Small</Input>
        <Input color="secondary" placeholder="Name and surname">Medium</Input>
        <Input color="secondary" placeholder="Name and surname" size="lg">Large</Input>
        <Input color="secondary" placeholder="Name and surname" variant="bordered" size="sm">Small</Input>
        <Input color="secondary" placeholder="Name and surname" variant="bordered">Medium</Input>
        <Input color="secondary" placeholder="Name and surname" variant="bordered" size="lg">Large</Input>
        <Input color="secondary" placeholder="Name and surname" variant="underlined" size="sm">Small</Input>
        <Input color="secondary" placeholder="Name and surname" variant="underlined">Medium</Input>
        <Input color="secondary" placeholder="Name and surname" variant="underlined" size="lg">Large</Input>
      </div>
    </div>
    <div className="space-x-3 p-3 flex flex-row">
      <div className="space-y-3 w-[30%]">
        <Select defaultValue={1}>
          <SelectOption value={1}>One</SelectOption>
          <SelectOption value={2}>Two</SelectOption>
          <SelectOption value={3}>Three</SelectOption>
        </Select>
        <br />
        <Select defaultValue={2} variant="bordered">
          <SelectOption value={1}>One</SelectOption>
          <SelectOption value={2}>Two</SelectOption>
          <SelectOption value={3}>Three</SelectOption>
        </Select>
        <br />
        <Select defaultValue={3} variant="underlined">
          <SelectOption value={1}>One</SelectOption>
          <SelectOption value={2}>Two</SelectOption>
          <SelectOption value={3}>Three</SelectOption>
        </Select>
      </div>
      <div className="space-y-3 w-[30%]">
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
