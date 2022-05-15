# React use callback factory
It is very simple React hook to create callback factories


## Installation
```
npm i react-use-callback-factory
```
```
yarn add react-use-callback-factory
```

## Use
```javascript
const onClickFactory = useCallbackFactory((id) => onClick(id), [onClick]);

...

<Component onClick={onClickFactory(id)} />
```

## Why this hook?
Quite often you can find the code like that:
```javascript
const Component = ({anyArray, onClick}) => {
    return <>
        {
            anyArray.map(
                ({id, name}) => 
                    <AnotherMemoComponent onClick={() => onClick(id)}>
                        {name}
                    </AnotherMemoComponent>
            )
        }
    </>
}
```

We can see that it is memo component, but we use arrow function to create callback and break the memo.
Quite often we can see something like that:  
```javascript
const Component = ({anyArray, onClick}) => {
    const onClickFactory = useCallback((id) => onClick(id), [onClick]);
    return <>
        {
            anyArray.map(
                ({id, name}) => 
                    <AnotherMemoComponent onClick={onClickFactory(id)}>
                        {name}
                    </AnotherMemoComponent>
            )
        }
    </>
}
```

It seems that it can help, but it is wrong. Factory will be the same, but result will be the same.

That why wi have this hook:
```javascript
const Component = ({anyArray, onClick}) => {
    const onClickFactory = useCallbackFactory((id) => onClick(id), [onClick]);
    return <>
        {
            anyArray.map(
                ({id, name}) => 
                    <AnotherMemoComponent onClick={onClickFactory(id)}>
                        {name}
                    </AnotherMemoComponent>
            )
        }
    </>
}
```

We use new hook instead, but memoization under the hood will help us to avoid issues.

Happy programming!