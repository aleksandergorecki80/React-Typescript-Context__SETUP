interface SingleItem {
    id: string; title: string; author: any
  }
  
export interface ArrayOfItems extends Array<SingleItem>{}

export interface AddElement { 
    type: 'ADD_ELEMENT',
    payload: {
        id: string; title: string; author: string
    }
}


interface RemoveElement {
    type: 'REMOVE_ELEMENT',
    payload: {
        id: string
    }
}

export type ListAction = AddElement | RemoveElement;