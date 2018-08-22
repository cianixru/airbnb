export interface MeQuery_me {
    email: string;
}
export interface MeQuery {
    me: MeQuery_me | null;
}
export interface ForgotPasswordChangeMutation_forgotPasswordChange {
    path: string;
    message: string;
}
export interface ForgotPasswordChangeMutation {
    forgotPasswordChange: ForgotPasswordChangeMutation_forgotPasswordChange[] | null;
}
export interface ForgotPasswordChangeMutationVariables {
    newPassword: string;
    key: string;
}
export interface CreateListingMutation {
    createListing: boolean;
}
export interface CreateListingMutationVariables {
    name: string;
    picture?: any | null;
    category: string;
    description: string;
    price: number;
    beds: number;
    guests: number;
    latitude: number;
    longitude: number;
    amenities: string[];
}
export interface CreateMessageMutation {
    createMessage: boolean;
}
export interface CreateMessageMutationVariables {
    message: MessageInput;
}
export interface FindListingsQuery_findListings_owner {
    id: string;
    email: string;
}
export interface FindListingsQuery_findListings {
    id: string;
    name: string;
    pictureUrl: string;
    description: string;
    owner: FindListingsQuery_findListings_owner;
}
export interface FindListingsQuery {
    findListings: FindListingsQuery_findListings[];
}
export interface SendForgotPasswordEmailMutation {
    sendForgotPasswordEmail: boolean | null;
}
export interface SendForgotPasswordEmailMutationVariables {
    email: string;
}
export interface LoginMutation_login_errors {
    path: string;
    message: string;
}
export interface LoginMutation_login {
    errors: LoginMutation_login_errors[] | null;
    sessionId: string | null;
}
export interface LoginMutation {
    login: LoginMutation_login;
}
export interface LoginMutationVariables {
    email: string;
    password: string;
}
export interface LogoutMutation {
    logout: boolean | null;
}
export interface RegisterMutation_register {
    path: string;
    message: string;
}
export interface RegisterMutation {
    register: RegisterMutation_register[] | null;
}
export interface RegisterMutationVariables {
    email: string;
    password: string;
}
export interface ViewListingQuery_viewListing_owner {
    id: string;
    email: string;
}
export interface ViewListingQuery_viewListing {
    id: string;
    name: string;
    category: string;
    pictureUrl: string;
    description: string;
    owner: ViewListingQuery_viewListing_owner;
}
export interface ViewListingQuery {
    viewListing: ViewListingQuery_viewListing | null;
}
export interface ViewListingQueryVariables {
    id: string;
}
export interface ViewMessagesQuery_messages_user {
    id: string;
    email: string;
}
export interface ViewMessagesQuery_messages {
    text: string;
    user: ViewMessagesQuery_messages_user;
    listingId: string;
}
export interface ViewMessagesQuery {
    messages: ViewMessagesQuery_messages[];
}
export interface ViewMessagesQueryVariables {
    listingId: string;
}
export interface NewMessageSubscription_newMessage_user {
    id: string;
    email: string;
}
export interface NewMessageSubscription_newMessage {
    text: string;
    user: NewMessageSubscription_newMessage_user;
    listingId: string;
}
export interface NewMessageSubscription {
    newMessage: NewMessageSubscription_newMessage;
}
export interface NewMessageSubscriptionVariables {
    listingId: string;
}
export interface MessageInput {
    text: string;
    listingId: string;
}
