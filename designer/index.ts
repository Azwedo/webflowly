import { WebflowMessageTypes } from "../ts"

const WebflowInternalHandler = (type: WebflowMessageTypes, message: string) => {
    // returns a resolved promise that does not need to be catched

    return webflow.notify({ 
        type: type, 
        message: message
    })
}

export const Notification = {
    Success: (message: string) => {
        // success notification
        WebflowInternalHandler('Success', message)
    },

    Error: (message: string) => {
        // error notification
        WebflowInternalHandler('Error', message)
    },
    
    Info: (message: string) => {
        // info notification
        WebflowInternalHandler('Info', message)
    }
}

export const GetSiteInfo = async () => {
    // Returns Site ID and Site Name
    // siteId: string; siteName: string;
    return await webflow.getSiteInfo()
}

export const GetSelectedElement = async () => {
    // returns the currently selected element or null
    return await webflow.getSelectedElement()
}

export const GetAllElements = async () => {
    // returns all elements on the page
    return await webflow.getAllElements()
}

export const GetCurrentBreakpoint = async () => {
    return await webflow.getMediaQuery()
}

export const CreateDomElement = (element: string) => {
    // returns a DOM element, which needs to be saved after is edited with .save()
    return webflow.createDOM(element)
}

export const CreateHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
    // creates and returns a heading element from 1 to 6 and needs to be saved after is edited with .save()
    return webflow.createHeading(level)
}

export const CreateStyle = (style: string) => {
    // creates and returns a style element and needs to be saved after is edited with .save()
    return webflow.createStyle(style)
}

export const GetStyle = async (style: string) => {
    // returns the style element by name if exists or null if not
    return await webflow.getStyleByName(style)
}

export const GetAllStyles = async () => {
    // returns all styles on the page
    return await webflow.getAllStyles()
}

export const GetCurrentPage = async () => {
    // returns the current page
    return await webflow.getCurrentPage()
}

export const GetAllPagesAndFolder = async () => {
    // returns all pages and folders
    return await webflow.getAllPagesAndFolders()
}

export const CreateFolder = async () => {
    // creates a folder and returns it
    return await webflow.createFolder()
}

export const CreatePage = async () => {
    return await webflow.createPage()
}

export const SwitchPage = async (pageId: string) => {
    // switches to the page with the given id and returs a promise
    return await webflow.switchPage(pageId)
}

// Objects & Methods
// to continue from https://developers.webflow.com/reference/the-webflow-object#subscribing-to-events-with-callbacks

export const GetElementTag = (element: any) => {
    // retuns the tag of the element and needs to be saved after is edited with .save()
    return element.getTag()
}

export const GetElementAttribute = (element: any, attribute: string) => {
    // returns the value of the attribute of the element and needs to be saved after is edited with .save()
    return element.getAttribute(attribute)
}

export const SetElementAttribute = (element: any, attribute: string, value: string) => {
    // sets the value of the attribute of the element and needs to be saved after is edited with .save()
    return element.setAttribute(attribute, value)
}

export const RemoveElementAttribute = (element: any, attribute: string) => {
    // removes the attribute of the element and needs to be saved after is edited with .save()
    return element.removeAttribute(attribute)
}

export const ElementHasCustomAttributes = (element: any) => {
    // returns true if the element has custom attributes and false if not
    return element.customAttributes()
}

export const GetElementCustomAttribute = (element: any, attribute: string) => {
    // returns the value of the custom attribute of the element or null if not exists
    return element.getCustomAttribute(attribute)
}

export const GetElementAllCustomAttributes = (element: any) => {
    // Get All Custom  Attributes of the Element
    return element.getAllCustomAttributes()
}

export const SetElementCustomAttribute = (element: any, attribute: string, value: string) => {
    // sets the value of the custom attribute of the element and needs to be saved after is edited with .save()
    return element.setCustomAttribute(attribute, value)
}

export const SetElementTextContent = (element: any, text: string) => {
    // returns undefined and needs to be saved after is edited with .save()
    return element.setTextContent(text)
}

export const GetElementChildren = (element: any) => {
    // returns the children of the element
    return element.getChildren()
}

export const SetElementChildren = (element: any, children: any[]) => {
    // returns undefined and needs to be saved after is edited with .save()
    return element.setChildren(children)
}

export const GetElementStyles = async (element: any) => {
    // returns the styles of the element
    return await element.getStyles()
}

export const SetElementStyles = async (element: any, styles: any[]) => {
    // returns undefined and needs to be saved after is edited with .save()
    return element.setStyles(styles)
}

export const DetachElementFromDom = async (element: any) => {
    // A Promise that resolves to undefined. doesn't complete until the element is destroyed
    return await element.detach()
}

export const SaveElement = async (element: any) => {
    // A Promise that resolves to undefined.
    return await element.save()
}


export const DestroyElementFromDom = async (element: any) => {
    // A Promise that resolves to undefined.
    return await element.destroy()
}