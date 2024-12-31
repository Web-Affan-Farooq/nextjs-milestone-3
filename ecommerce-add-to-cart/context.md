## Use context and context api in react

## Important note: Make sure you're using typescript in your project and code inside .tsx extension file while following notes

For now, let's implement an example. 
## Objective:
to create a state that is globally usable across various components i.e username and we are using the state in another components

## Step-1:
Create a new file UserContext.tsx
create a simple component

``` javascript 
import React from 'react'

const UserContext = () => {
  return (
    <div>UserContext</div>  // 
  )
}

export default UserContext

```
This is the simple component that is rendering an div element.

## step-2:

1. import "createContext" in your file
2. create a global variable (variable should be on the same level as "UserContext" function above)
3. create a provider element as <DataContext.provider> </DataContext.provider> and render the childrens 
4. value must contain an array of items, one is state and another 

Full code 

``` javascript
"use client";

import React, {createContext, useState} from 'react';

export const DataContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(['', () => {}]);

const UserContext = ({
    children
}: {
    children:React.ReactNode
}) => {

    const [data, setdata] = useState("Muhammad affan")

  return (
    <DataContext.Provider value={[data, setdata]}>
        {children}
    </DataContext.Provider>
  )
}

export default UserContext
 
```