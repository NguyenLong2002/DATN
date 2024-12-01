//base instance 
interface baseInstance {
    message: string,
    status: number,
    options?: responseOptionBase,
}

interface responseMetadataToken {
    user: responseUserToken,
    tokens: responseTokenToken
}

interface baseUpdate extends baseInstance {
    metadata: number[]
}

interface basePagination {
    current?: number,
    pageSize?: number,
}

interface paginationQuery {
    page?: number,
    limit?: number,
}

interface baseSearchQuery extends paginationQuery {
    name: string;
}

interface responseOptionBase {
    limit: number,
}

//hoc
interface resize {
    width: number;
    height: number;
}


interface UserState {
    id: number,
    name: string,
    email: string,
    address: string,
    dateOfBirth: string,
    phoneNumber: string,
    role_user: string,
    sex: string,
    deleteFlg: number,
    avatar: string,
    time_expired?: string | null,
    is_active?: '0' | '1',
    created_at: Date,
    update_date
}

interface formDataSignUp {
    name: string,
    email: string,
    password: string,
    re_password: string,
    is_active?: '0' | '1',
}

interface formDataSignIn {
    email: string,
    password: string,
}

interface responseTokenToken {
    accessToken: string,
    refreshToken: string,
}

interface responseSignUp extends baseInstance {
    metadata: responseMetadataSignUp
}

interface responseMetadataSignUp {
    user: responseUserSignUp
}

interface responseToken extends baseInstance {
    metadata: responseMetadataToken
}


interface baseDelete extends baseInstance {
    metadata: number[]
}

interface metadataUser extends baseInstance{
    metadata: UserState
}
