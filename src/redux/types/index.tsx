export interface ITokenPayload {
    access_token: string,
    refresh_token: string,
    access_expired_at: number,
    refresh_expired_at: number
}

export interface IAuthAction {
    type: string,
    payload: FormValues
}

export type FormValues = {
    email: string,
    password: string,
}

export type IPost = {
    id: number,
    title: string,
    code: string,
    authorName: string,
    previewPicture: IPreviewPicture,
    tagNames: string[],
    updatedAt: string,
    createdAt: string
}

export interface IPreviewPicture {
    id: number,
    name: string,
    url: string
}