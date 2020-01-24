import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};

export type AddSkillInput = {
  skillInput: Array<SkillInput>,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  loggedUser?: Maybe<User>,
  loggedCompany?: Maybe<Company>,
};

export type Category = {
   __typename?: 'Category',
  id: Scalars['ID'],
  name: Scalars['String'],
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  enabled?: Maybe<Scalars['Boolean']>,
};

export type ChangePasswordInput = {
  password: Scalars['String'],
  token: Scalars['String'],
};

export type Comment = {
   __typename?: 'Comment',
  id: Scalars['ID'],
  text: Scalars['String'],
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  authorId: Scalars['ID'],
  author: User,
  postId: Scalars['ID'],
  post: Post,
  reported: Scalars['Boolean'],
  blocked: Scalars['Boolean'],
};

export type Company = {
   __typename?: 'Company',
  id: Scalars['ID'],
  email: Scalars['String'],
  companyName: Scalars['String'],
  companyDetails?: Maybe<Scalars['String']>,
  pictureUrl?: Maybe<Scalars['String']>,
  linkedinUrl?: Maybe<Scalars['String']>,
  forgotPasswordLocked?: Maybe<Scalars['Boolean']>,
  confirmed: Scalars['Boolean'],
  reported: Scalars['Boolean'],
  blocked: Scalars['Boolean'],
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
};

export type CompanyDetailsInput = {
  companyDetails: Scalars['String'],
  picture?: Maybe<Scalars['Upload']>,
  linkedinUrl?: Maybe<Scalars['String']>,
};

export type CompanyPayload = {
   __typename?: 'CompanyPayload',
  company?: Maybe<Company>,
  errors?: Maybe<Array<Error>>,
};

export type CreatePostInput = {
  title: Scalars['String'],
  slug: Scalars['String'],
  details: Scalars['String'],
  picture?: Maybe<Scalars['Upload']>,
  tagInput: Array<TagInput>,
};

export type CursorInput = {
  id: Scalars['String'],
  score: Scalars['Float'],
  date: Scalars['DateTime'],
};

export type CursorPayload = {
   __typename?: 'CursorPayload',
  id: Scalars['String'],
  score: Scalars['Float'],
  date: Scalars['DateTime'],
};


export type Error = {
   __typename?: 'Error',
  path: Scalars['String'],
  message: Scalars['String'],
};

export type ErrorPayload = {
   __typename?: 'ErrorPayload',
  error?: Maybe<Array<Error>>,
};

export type ImagePayload = {
   __typename?: 'ImagePayload',
  filename?: Maybe<Scalars['String']>,
  errors?: Maybe<Array<Error>>,
};

export type Job = {
   __typename?: 'Job',
  id: Scalars['ID'],
  title: Scalars['String'],
  details: Scalars['String'],
  skills?: Maybe<Array<JobSkillOutput>>,
};

export type JobDetailsInput = {
  title: Scalars['String'],
  details: Scalars['String'],
  jobSkills: Array<JobSkillInput>,
};

export type JobPayload = {
   __typename?: 'JobPayload',
  job?: Maybe<Job>,
  errors?: Maybe<Array<Error>>,
};

export type JobSkillInput = {
  skillId: Scalars['String'],
  skillName: Scalars['String'],
  level: Scalars['Float'],
  skillDetails: Scalars['String'],
};

export type JobSkillOutput = {
   __typename?: 'JobSkillOutput',
  skillId: Scalars['String'],
  skillName: Scalars['String'],
  level: Scalars['Float'],
  skillDetails: Scalars['String'],
};

export type LoginCompanyInput = {
  password: Scalars['String'],
  email: Scalars['String'],
};

export type LoginInput = {
  password: Scalars['String'],
  email: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createUser: User,
  loginCompany: CompanyPayload,
  addCompanyDetails: CompanyPayload,
  registerCompany: CompanyPayload,
  addJobDetails: JobPayload,
  createPost?: Maybe<PostPayload>,
  uploadImage?: Maybe<ImagePayload>,
  addPersonalDetails?: Maybe<UserPayload>,
  addSkill?: Maybe<UserPayload>,
  updateSkill?: Maybe<Scalars['Boolean']>,
  changePassword?: Maybe<Scalars['Boolean']>,
  confirmEmail?: Maybe<ErrorPayload>,
  forgotPassword: Scalars['Boolean'],
  login: UserPayload,
  logout: Scalars['Boolean'],
  register: UserPayload,
};


export type MutationCreateUserArgs = {
  input: RegisterInput
};


export type MutationLoginCompanyArgs = {
  input: LoginCompanyInput
};


export type MutationAddCompanyDetailsArgs = {
  input: CompanyDetailsInput
};


export type MutationRegisterCompanyArgs = {
  input: RegisterCompanyInput
};


export type MutationAddJobDetailsArgs = {
  input: JobDetailsInput
};


export type MutationCreatePostArgs = {
  input: CreatePostInput
};


export type MutationUploadImageArgs = {
  input: UploadImageInput
};


export type MutationAddPersonalDetailsArgs = {
  input: PersonalDetailsInput
};


export type MutationAddSkillArgs = {
  input: AddSkillInput
};


export type MutationUpdateSkillArgs = {
  input: AddSkillInput
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput
};


export type MutationConfirmEmailArgs = {
  token: Scalars['String']
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']
};


export type MutationLoginArgs = {
  input: LoginInput
};


export type MutationRegisterArgs = {
  input: RegisterInput
};

export type PersonalDetailsInput = {
  fullName?: Maybe<Scalars['String']>,
  picture?: Maybe<Scalars['Upload']>,
  linkedinUrl?: Maybe<Scalars['String']>,
};

export type Post = {
   __typename?: 'Post',
  id: Scalars['ID'],
  title: Scalars['String'],
  slug: Scalars['String'],
  details: Scalars['String'],
  tags?: Maybe<Array<TagTg>>,
  pictureUrl?: Maybe<Scalars['String']>,
  views?: Maybe<Scalars['Float']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  authorId: Scalars['ID'],
  author: User,
  comments?: Maybe<Array<Comment>>,
};

export type PostPayload = {
   __typename?: 'PostPayload',
  post?: Maybe<Post>,
  errors?: Maybe<Array<Error>>,
};

export type Query = {
   __typename?: 'Query',
  checkAuth?: Maybe<AuthPayload>,
  meCompany?: Maybe<Company>,
  postDetails?: Maybe<Post>,
  searchPostList?: Maybe<SearchPostPayload>,
  searchTags?: Maybe<Array<Tag>>,
  viewProfile: UserPayload,
  searchSkills?: Maybe<Array<Skill>>,
  me?: Maybe<User>,
  hello: Scalars['String'],
};


export type QueryPostDetailsArgs = {
  slug: Scalars['String']
};


export type QuerySearchPostListArgs = {
  text: Scalars['String'],
  limit: Scalars['Int'],
  dateSort?: Maybe<Scalars['String']>,
  cursor?: Maybe<CursorInput>
};


export type QuerySearchTagsArgs = {
  tagName: Scalars['String']
};


export type QueryViewProfileArgs = {
  userName: Scalars['String']
};


export type QuerySearchSkillsArgs = {
  skillName: Scalars['String']
};

export type RegisterCompanyInput = {
  password: Scalars['String'],
  email: Scalars['String'],
  companyName: Scalars['String'],
};

export type RegisterInput = {
  password: Scalars['String'],
  email: Scalars['String'],
  userName: Scalars['String'],
};

export type SearchPostPayload = {
   __typename?: 'SearchPostPayload',
  posts?: Maybe<Array<Post>>,
  hasMore: Scalars['Boolean'],
  cursor?: Maybe<CursorPayload>,
};

export type Skill = {
   __typename?: 'Skill',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type SkillG = {
   __typename?: 'SkillG',
  skillId: Scalars['String'],
  skillName: Scalars['String'],
  level: Scalars['Float'],
  oldSkill: Scalars['Boolean'],
};

export type SkillInput = {
  skillId: Scalars['String'],
  skillName: Scalars['String'],
  level: Scalars['Float'],
  oldSkill: Scalars['Boolean'],
};

export type Tag = {
   __typename?: 'Tag',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type TagInput = {
  tagId: Scalars['String'],
  tagName: Scalars['String'],
};

export type TagTg = {
   __typename?: 'TagTG',
  tagId: Scalars['String'],
  tagName: Scalars['String'],
};


export type UploadImageInput = {
  picture: Scalars['Upload'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
  userName: Scalars['String'],
  fullName?: Maybe<Scalars['String']>,
  pictureUrl?: Maybe<Scalars['String']>,
  linkedinUrl?: Maybe<Scalars['String']>,
  forgotPasswordLocked?: Maybe<Scalars['Boolean']>,
  confirmed: Scalars['Boolean'],
  reported: Scalars['Boolean'],
  blocked: Scalars['Boolean'],
  skills?: Maybe<Array<SkillG>>,
  posts?: Maybe<Array<Post>>,
  comments?: Maybe<Array<Comment>>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
};

export type UserPayload = {
   __typename?: 'UserPayload',
  user?: Maybe<User>,
  errors?: Maybe<Array<Error>>,
};

export type CompanyFragments_CompanyFragment = (
  { __typename?: 'Company' }
  & Pick<Company, 'id' | 'email' | 'companyName' | 'companyDetails' | 'pictureUrl' | 'linkedinUrl' | 'forgotPasswordLocked' | 'confirmed' | 'reported' | 'blocked'>
);

export type CursorFragments_CursorFragment = (
  { __typename?: 'CursorPayload' }
  & Pick<CursorPayload, 'id' | 'date' | 'score'>
);

export type ErrorFragments_ErrorFragment = (
  { __typename?: 'Error' }
  & Pick<Error, 'path' | 'message'>
);

export type PostFragments_PostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'slug' | 'details' | 'pictureUrl' | 'views' | 'authorId' | 'createdAt' | 'updatedAt'>
  & { author: (
    { __typename?: 'User' }
    & UserFragments_UserFragment
  ), tags: Maybe<Array<(
    { __typename?: 'TagTG' }
    & TagFragments_TagTgFragment
  )>> }
);

export type SkillFragments_SkillGFragment = (
  { __typename?: 'SkillG' }
  & Pick<SkillG, 'skillId' | 'skillName' | 'level' | 'oldSkill'>
);

export type TagFragments_TagTgFragment = (
  { __typename?: 'TagTG' }
  & Pick<TagTg, 'tagId' | 'tagName'>
);

export type UserFragments_UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'userName' | 'fullName' | 'pictureUrl' | 'linkedinUrl' | 'forgotPasswordLocked' | 'confirmed' | 'reported' | 'blocked' | 'createdAt' | 'updatedAt'>
  & { skills: Maybe<Array<(
    { __typename?: 'SkillG' }
    & SkillFragments_SkillGFragment
  )>> }
);

export type ChangePasswordMutationVariables = {
  input: ChangePasswordInput
};


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changePassword'>
);

export type ConfirmEmailMutationVariables = {
  token: Scalars['String']
};


export type ConfirmEmailMutation = (
  { __typename?: 'Mutation' }
  & { confirmEmail: Maybe<(
    { __typename?: 'ErrorPayload' }
    & { error: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorFragments_ErrorFragment
    )>> }
  )> }
);

export type ForgotPasswordMutationVariables = {
  email: Scalars['String']
};


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type HelloQueryVariables = {};


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type LoginMutationVariables = {
  input: LoginInput
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserPayload' }
    & { user: Maybe<(
      { __typename?: 'User' }
      & UserFragments_UserFragment
    )>, errors: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorFragments_ErrorFragment
    )>> }
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & UserFragments_UserFragment
  )> }
);

export type RegisterMutationVariables = {
  input: RegisterInput
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserPayload' }
    & { user: Maybe<(
      { __typename?: 'User' }
      & UserFragments_UserFragment
    )>, errors: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorFragments_ErrorFragment
    )>> }
  ) }
);

export type CheckAuthQueryVariables = {};


export type CheckAuthQuery = (
  { __typename?: 'Query' }
  & { checkAuth: Maybe<(
    { __typename?: 'AuthPayload' }
    & { loggedUser: Maybe<(
      { __typename?: 'User' }
      & UserFragments_UserFragment
    )>, loggedCompany: Maybe<(
      { __typename?: 'Company' }
      & CompanyFragments_CompanyFragment
    )> }
  )> }
);

export type AddCompanyDetailsMutationVariables = {
  input: CompanyDetailsInput
};


export type AddCompanyDetailsMutation = (
  { __typename?: 'Mutation' }
  & { addCompanyDetails: (
    { __typename?: 'CompanyPayload' }
    & { company: Maybe<(
      { __typename?: 'Company' }
      & CompanyFragments_CompanyFragment
    )>, errors: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorFragments_ErrorFragment
    )>> }
  ) }
);

export type LoginCompanyMutationVariables = {
  input: LoginCompanyInput
};


export type LoginCompanyMutation = (
  { __typename?: 'Mutation' }
  & { loginCompany: (
    { __typename?: 'CompanyPayload' }
    & { company: Maybe<(
      { __typename?: 'Company' }
      & CompanyFragments_CompanyFragment
    )>, errors: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorFragments_ErrorFragment
    )>> }
  ) }
);

export type MeCompanyQueryVariables = {};


export type MeCompanyQuery = (
  { __typename?: 'Query' }
  & { meCompany: Maybe<(
    { __typename?: 'Company' }
    & CompanyFragments_CompanyFragment
  )> }
);

export type RegisterCompanyMutationVariables = {
  input: RegisterCompanyInput
};


export type RegisterCompanyMutation = (
  { __typename?: 'Mutation' }
  & { registerCompany: (
    { __typename?: 'CompanyPayload' }
    & { company: Maybe<(
      { __typename?: 'Company' }
      & CompanyFragments_CompanyFragment
    )>, errors: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorFragments_ErrorFragment
    )>> }
  ) }
);

export type CreatePostMutationVariables = {
  input: CreatePostInput
};


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: Maybe<(
    { __typename?: 'PostPayload' }
    & { post: Maybe<(
      { __typename?: 'Post' }
      & PostFragments_PostFragment
    )>, errors: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorFragments_ErrorFragment
    )>> }
  )> }
);

export type PostDetailsQueryVariables = {
  slug: Scalars['String']
};


export type PostDetailsQuery = (
  { __typename?: 'Query' }
  & { postDetails: Maybe<(
    { __typename?: 'Post' }
    & PostFragments_PostFragment
  )> }
);

export type SearchPostListQueryVariables = {
  text: Scalars['String'],
  limit: Scalars['Int'],
  dateSort?: Maybe<Scalars['String']>,
  cursor?: Maybe<CursorInput>
};


export type SearchPostListQuery = (
  { __typename?: 'Query' }
  & { searchPostList: Maybe<(
    { __typename?: 'SearchPostPayload' }
    & Pick<SearchPostPayload, 'hasMore'>
    & { posts: Maybe<Array<(
      { __typename?: 'Post' }
      & PostFragments_PostFragment
    )>>, cursor: Maybe<(
      { __typename?: 'CursorPayload' }
      & CursorFragments_CursorFragment
    )> }
  )> }
);

export type SearchTagsQueryVariables = {
  tagName: Scalars['String']
};


export type SearchTagsQuery = (
  { __typename?: 'Query' }
  & { searchTags: Maybe<Array<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'name'>
  )>> }
);

export type UploadImageMutationVariables = {
  input: UploadImageInput
};


export type UploadImageMutation = (
  { __typename?: 'Mutation' }
  & { uploadImage: Maybe<(
    { __typename?: 'ImagePayload' }
    & Pick<ImagePayload, 'filename'>
    & { errors: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorFragments_ErrorFragment
    )>> }
  )> }
);

export type AddPersonalDetailsMutationVariables = {
  input: PersonalDetailsInput
};


export type AddPersonalDetailsMutation = (
  { __typename?: 'Mutation' }
  & { addPersonalDetails: Maybe<(
    { __typename?: 'UserPayload' }
    & { user: Maybe<(
      { __typename?: 'User' }
      & UserFragments_UserFragment
    )>, errors: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorFragments_ErrorFragment
    )>> }
  )> }
);

export type AddSkillMutationVariables = {
  input: AddSkillInput
};


export type AddSkillMutation = (
  { __typename?: 'Mutation' }
  & { addSkill: Maybe<(
    { __typename?: 'UserPayload' }
    & { user: Maybe<(
      { __typename?: 'User' }
      & UserFragments_UserFragment
    )>, errors: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorFragments_ErrorFragment
    )>> }
  )> }
);

export type SearchSkillsQueryVariables = {
  skillName: Scalars['String']
};


export type SearchSkillsQuery = (
  { __typename?: 'Query' }
  & { searchSkills: Maybe<Array<(
    { __typename?: 'Skill' }
    & Pick<Skill, 'id' | 'name'>
  )>> }
);

export type ViewProfileQueryVariables = {
  userName: Scalars['String']
};


export type ViewProfileQuery = (
  { __typename?: 'Query' }
  & { viewProfile: (
    { __typename?: 'UserPayload' }
    & { user: Maybe<(
      { __typename?: 'User' }
      & UserFragments_UserFragment
    )>, errors: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorFragments_ErrorFragment
    )>> }
  ) }
);

export const CompanyFragments_CompanyFragmentDoc = gql`
    fragment CompanyFragments_company on Company {
  id
  email
  companyName
  companyDetails
  pictureUrl
  linkedinUrl
  forgotPasswordLocked
  confirmed
  reported
  blocked
}
    `;
export const CursorFragments_CursorFragmentDoc = gql`
    fragment CursorFragments_cursor on CursorPayload {
  id
  date
  score
}
    `;
export const ErrorFragments_ErrorFragmentDoc = gql`
    fragment ErrorFragments_error on Error {
  path
  message
}
    `;
export const SkillFragments_SkillGFragmentDoc = gql`
    fragment SkillFragments_skillG on SkillG {
  skillId
  skillName
  level
  oldSkill
}
    `;
export const UserFragments_UserFragmentDoc = gql`
    fragment UserFragments_user on User {
  id
  email
  userName
  fullName
  pictureUrl
  linkedinUrl
  forgotPasswordLocked
  confirmed
  reported
  blocked
  skills {
    ...SkillFragments_skillG
  }
  createdAt
  updatedAt
}
    ${SkillFragments_SkillGFragmentDoc}`;
export const TagFragments_TagTgFragmentDoc = gql`
    fragment TagFragments_tagTG on TagTG {
  tagId
  tagName
}
    `;
export const PostFragments_PostFragmentDoc = gql`
    fragment PostFragments_post on Post {
  id
  title
  slug
  details
  pictureUrl
  views
  authorId
  author {
    ...UserFragments_user
  }
  tags {
    ...TagFragments_tagTG
  }
  createdAt
  updatedAt
}
    ${UserFragments_UserFragmentDoc}
${TagFragments_TagTgFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($input: ChangePasswordInput!) {
  changePassword(input: $input)
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ConfirmEmailDocument = gql`
    mutation ConfirmEmail($token: String!) {
  confirmEmail(token: $token) {
    error {
      ...ErrorFragments_error
    }
  }
}
    ${ErrorFragments_ErrorFragmentDoc}`;
export type ConfirmEmailMutationFn = ApolloReactCommon.MutationFunction<ConfirmEmailMutation, ConfirmEmailMutationVariables>;

/**
 * __useConfirmEmailMutation__
 *
 * To run a mutation, you first call `useConfirmEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmEmailMutation, { data, loading, error }] = useConfirmEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<ConfirmEmailMutation, ConfirmEmailMutationVariables>(ConfirmEmailDocument, baseOptions);
      }
export type ConfirmEmailMutationHookResult = ReturnType<typeof useConfirmEmailMutation>;
export type ConfirmEmailMutationResult = ApolloReactCommon.MutationResult<ConfirmEmailMutation>;
export type ConfirmEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return ApolloReactHooks.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
export function useHelloLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = ApolloReactCommon.QueryResult<HelloQuery, HelloQueryVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    user {
      ...UserFragments_user
    }
    errors {
      ...ErrorFragments_error
    }
  }
}
    ${UserFragments_UserFragmentDoc}
${ErrorFragments_ErrorFragmentDoc}`;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserFragments_user
  }
}
    ${UserFragments_UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    user {
      ...UserFragments_user
    }
    errors {
      ...ErrorFragments_error
    }
  }
}
    ${UserFragments_UserFragmentDoc}
${ErrorFragments_ErrorFragmentDoc}`;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CheckAuthDocument = gql`
    query CheckAuth {
  checkAuth {
    loggedUser {
      ...UserFragments_user
    }
    loggedCompany {
      ...CompanyFragments_company
    }
  }
}
    ${UserFragments_UserFragmentDoc}
${CompanyFragments_CompanyFragmentDoc}`;

/**
 * __useCheckAuthQuery__
 *
 * To run a query within a React component, call `useCheckAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckAuthQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CheckAuthQuery, CheckAuthQueryVariables>) {
        return ApolloReactHooks.useQuery<CheckAuthQuery, CheckAuthQueryVariables>(CheckAuthDocument, baseOptions);
      }
export function useCheckAuthLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CheckAuthQuery, CheckAuthQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CheckAuthQuery, CheckAuthQueryVariables>(CheckAuthDocument, baseOptions);
        }
export type CheckAuthQueryHookResult = ReturnType<typeof useCheckAuthQuery>;
export type CheckAuthLazyQueryHookResult = ReturnType<typeof useCheckAuthLazyQuery>;
export type CheckAuthQueryResult = ApolloReactCommon.QueryResult<CheckAuthQuery, CheckAuthQueryVariables>;
export const AddCompanyDetailsDocument = gql`
    mutation AddCompanyDetails($input: CompanyDetailsInput!) {
  addCompanyDetails(input: $input) {
    company {
      ...CompanyFragments_company
    }
    errors {
      ...ErrorFragments_error
    }
  }
}
    ${CompanyFragments_CompanyFragmentDoc}
${ErrorFragments_ErrorFragmentDoc}`;
export type AddCompanyDetailsMutationFn = ApolloReactCommon.MutationFunction<AddCompanyDetailsMutation, AddCompanyDetailsMutationVariables>;

/**
 * __useAddCompanyDetailsMutation__
 *
 * To run a mutation, you first call `useAddCompanyDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCompanyDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCompanyDetailsMutation, { data, loading, error }] = useAddCompanyDetailsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCompanyDetailsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddCompanyDetailsMutation, AddCompanyDetailsMutationVariables>) {
        return ApolloReactHooks.useMutation<AddCompanyDetailsMutation, AddCompanyDetailsMutationVariables>(AddCompanyDetailsDocument, baseOptions);
      }
export type AddCompanyDetailsMutationHookResult = ReturnType<typeof useAddCompanyDetailsMutation>;
export type AddCompanyDetailsMutationResult = ApolloReactCommon.MutationResult<AddCompanyDetailsMutation>;
export type AddCompanyDetailsMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCompanyDetailsMutation, AddCompanyDetailsMutationVariables>;
export const LoginCompanyDocument = gql`
    mutation LoginCompany($input: LoginCompanyInput!) {
  loginCompany(input: $input) {
    company {
      ...CompanyFragments_company
    }
    errors {
      ...ErrorFragments_error
    }
  }
}
    ${CompanyFragments_CompanyFragmentDoc}
${ErrorFragments_ErrorFragmentDoc}`;
export type LoginCompanyMutationFn = ApolloReactCommon.MutationFunction<LoginCompanyMutation, LoginCompanyMutationVariables>;

/**
 * __useLoginCompanyMutation__
 *
 * To run a mutation, you first call `useLoginCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginCompanyMutation, { data, loading, error }] = useLoginCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginCompanyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginCompanyMutation, LoginCompanyMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginCompanyMutation, LoginCompanyMutationVariables>(LoginCompanyDocument, baseOptions);
      }
export type LoginCompanyMutationHookResult = ReturnType<typeof useLoginCompanyMutation>;
export type LoginCompanyMutationResult = ApolloReactCommon.MutationResult<LoginCompanyMutation>;
export type LoginCompanyMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginCompanyMutation, LoginCompanyMutationVariables>;
export const MeCompanyDocument = gql`
    query MeCompany {
  meCompany {
    ...CompanyFragments_company
  }
}
    ${CompanyFragments_CompanyFragmentDoc}`;

/**
 * __useMeCompanyQuery__
 *
 * To run a query within a React component, call `useMeCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeCompanyQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeCompanyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeCompanyQuery, MeCompanyQueryVariables>) {
        return ApolloReactHooks.useQuery<MeCompanyQuery, MeCompanyQueryVariables>(MeCompanyDocument, baseOptions);
      }
export function useMeCompanyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeCompanyQuery, MeCompanyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeCompanyQuery, MeCompanyQueryVariables>(MeCompanyDocument, baseOptions);
        }
export type MeCompanyQueryHookResult = ReturnType<typeof useMeCompanyQuery>;
export type MeCompanyLazyQueryHookResult = ReturnType<typeof useMeCompanyLazyQuery>;
export type MeCompanyQueryResult = ApolloReactCommon.QueryResult<MeCompanyQuery, MeCompanyQueryVariables>;
export const RegisterCompanyDocument = gql`
    mutation RegisterCompany($input: RegisterCompanyInput!) {
  registerCompany(input: $input) {
    company {
      ...CompanyFragments_company
    }
    errors {
      ...ErrorFragments_error
    }
  }
}
    ${CompanyFragments_CompanyFragmentDoc}
${ErrorFragments_ErrorFragmentDoc}`;
export type RegisterCompanyMutationFn = ApolloReactCommon.MutationFunction<RegisterCompanyMutation, RegisterCompanyMutationVariables>;

/**
 * __useRegisterCompanyMutation__
 *
 * To run a mutation, you first call `useRegisterCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerCompanyMutation, { data, loading, error }] = useRegisterCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterCompanyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterCompanyMutation, RegisterCompanyMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterCompanyMutation, RegisterCompanyMutationVariables>(RegisterCompanyDocument, baseOptions);
      }
export type RegisterCompanyMutationHookResult = ReturnType<typeof useRegisterCompanyMutation>;
export type RegisterCompanyMutationResult = ApolloReactCommon.MutationResult<RegisterCompanyMutation>;
export type RegisterCompanyMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterCompanyMutation, RegisterCompanyMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    post {
      ...PostFragments_post
    }
    errors {
      ...ErrorFragments_error
    }
  }
}
    ${PostFragments_PostFragmentDoc}
${ErrorFragments_ErrorFragmentDoc}`;
export type CreatePostMutationFn = ApolloReactCommon.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = ApolloReactCommon.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const PostDetailsDocument = gql`
    query PostDetails($slug: String!) {
  postDetails(slug: $slug) {
    ...PostFragments_post
  }
}
    ${PostFragments_PostFragmentDoc}`;

/**
 * __usePostDetailsQuery__
 *
 * To run a query within a React component, call `usePostDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostDetailsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePostDetailsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostDetailsQuery, PostDetailsQueryVariables>) {
        return ApolloReactHooks.useQuery<PostDetailsQuery, PostDetailsQueryVariables>(PostDetailsDocument, baseOptions);
      }
export function usePostDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostDetailsQuery, PostDetailsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostDetailsQuery, PostDetailsQueryVariables>(PostDetailsDocument, baseOptions);
        }
export type PostDetailsQueryHookResult = ReturnType<typeof usePostDetailsQuery>;
export type PostDetailsLazyQueryHookResult = ReturnType<typeof usePostDetailsLazyQuery>;
export type PostDetailsQueryResult = ApolloReactCommon.QueryResult<PostDetailsQuery, PostDetailsQueryVariables>;
export const SearchPostListDocument = gql`
    query SearchPostList($text: String!, $limit: Int!, $dateSort: String, $cursor: CursorInput) {
  searchPostList(text: $text, limit: $limit, dateSort: $dateSort, cursor: $cursor) @connection(key: "SearchPostListKeyConnection") {
    posts {
      ...PostFragments_post
    }
    hasMore
    cursor {
      ...CursorFragments_cursor
    }
  }
}
    ${PostFragments_PostFragmentDoc}
${CursorFragments_CursorFragmentDoc}`;

/**
 * __useSearchPostListQuery__
 *
 * To run a query within a React component, call `useSearchPostListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPostListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPostListQuery({
 *   variables: {
 *      text: // value for 'text'
 *      limit: // value for 'limit'
 *      dateSort: // value for 'dateSort'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useSearchPostListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchPostListQuery, SearchPostListQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchPostListQuery, SearchPostListQueryVariables>(SearchPostListDocument, baseOptions);
      }
export function useSearchPostListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchPostListQuery, SearchPostListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchPostListQuery, SearchPostListQueryVariables>(SearchPostListDocument, baseOptions);
        }
export type SearchPostListQueryHookResult = ReturnType<typeof useSearchPostListQuery>;
export type SearchPostListLazyQueryHookResult = ReturnType<typeof useSearchPostListLazyQuery>;
export type SearchPostListQueryResult = ApolloReactCommon.QueryResult<SearchPostListQuery, SearchPostListQueryVariables>;
export const SearchTagsDocument = gql`
    query SearchTags($tagName: String!) {
  searchTags(tagName: $tagName) {
    id
    name
  }
}
    `;

/**
 * __useSearchTagsQuery__
 *
 * To run a query within a React component, call `useSearchTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTagsQuery({
 *   variables: {
 *      tagName: // value for 'tagName'
 *   },
 * });
 */
export function useSearchTagsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchTagsQuery, SearchTagsQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchTagsQuery, SearchTagsQueryVariables>(SearchTagsDocument, baseOptions);
      }
export function useSearchTagsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchTagsQuery, SearchTagsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchTagsQuery, SearchTagsQueryVariables>(SearchTagsDocument, baseOptions);
        }
export type SearchTagsQueryHookResult = ReturnType<typeof useSearchTagsQuery>;
export type SearchTagsLazyQueryHookResult = ReturnType<typeof useSearchTagsLazyQuery>;
export type SearchTagsQueryResult = ApolloReactCommon.QueryResult<SearchTagsQuery, SearchTagsQueryVariables>;
export const UploadImageDocument = gql`
    mutation UploadImage($input: UploadImageInput!) {
  uploadImage(input: $input) {
    filename
    errors {
      ...ErrorFragments_error
    }
  }
}
    ${ErrorFragments_ErrorFragmentDoc}`;
export type UploadImageMutationFn = ApolloReactCommon.MutationFunction<UploadImageMutation, UploadImageMutationVariables>;

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUploadImageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UploadImageMutation, UploadImageMutationVariables>) {
        return ApolloReactHooks.useMutation<UploadImageMutation, UploadImageMutationVariables>(UploadImageDocument, baseOptions);
      }
export type UploadImageMutationHookResult = ReturnType<typeof useUploadImageMutation>;
export type UploadImageMutationResult = ApolloReactCommon.MutationResult<UploadImageMutation>;
export type UploadImageMutationOptions = ApolloReactCommon.BaseMutationOptions<UploadImageMutation, UploadImageMutationVariables>;
export const AddPersonalDetailsDocument = gql`
    mutation AddPersonalDetails($input: PersonalDetailsInput!) {
  addPersonalDetails(input: $input) {
    user {
      ...UserFragments_user
    }
    errors {
      ...ErrorFragments_error
    }
  }
}
    ${UserFragments_UserFragmentDoc}
${ErrorFragments_ErrorFragmentDoc}`;
export type AddPersonalDetailsMutationFn = ApolloReactCommon.MutationFunction<AddPersonalDetailsMutation, AddPersonalDetailsMutationVariables>;

/**
 * __useAddPersonalDetailsMutation__
 *
 * To run a mutation, you first call `useAddPersonalDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPersonalDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPersonalDetailsMutation, { data, loading, error }] = useAddPersonalDetailsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPersonalDetailsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddPersonalDetailsMutation, AddPersonalDetailsMutationVariables>) {
        return ApolloReactHooks.useMutation<AddPersonalDetailsMutation, AddPersonalDetailsMutationVariables>(AddPersonalDetailsDocument, baseOptions);
      }
export type AddPersonalDetailsMutationHookResult = ReturnType<typeof useAddPersonalDetailsMutation>;
export type AddPersonalDetailsMutationResult = ApolloReactCommon.MutationResult<AddPersonalDetailsMutation>;
export type AddPersonalDetailsMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPersonalDetailsMutation, AddPersonalDetailsMutationVariables>;
export const AddSkillDocument = gql`
    mutation AddSkill($input: AddSkillInput!) {
  addSkill(input: $input) {
    user {
      ...UserFragments_user
    }
    errors {
      ...ErrorFragments_error
    }
  }
}
    ${UserFragments_UserFragmentDoc}
${ErrorFragments_ErrorFragmentDoc}`;
export type AddSkillMutationFn = ApolloReactCommon.MutationFunction<AddSkillMutation, AddSkillMutationVariables>;

/**
 * __useAddSkillMutation__
 *
 * To run a mutation, you first call `useAddSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSkillMutation, { data, loading, error }] = useAddSkillMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddSkillMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddSkillMutation, AddSkillMutationVariables>) {
        return ApolloReactHooks.useMutation<AddSkillMutation, AddSkillMutationVariables>(AddSkillDocument, baseOptions);
      }
export type AddSkillMutationHookResult = ReturnType<typeof useAddSkillMutation>;
export type AddSkillMutationResult = ApolloReactCommon.MutationResult<AddSkillMutation>;
export type AddSkillMutationOptions = ApolloReactCommon.BaseMutationOptions<AddSkillMutation, AddSkillMutationVariables>;
export const SearchSkillsDocument = gql`
    query SearchSkills($skillName: String!) {
  searchSkills(skillName: $skillName) {
    id
    name
  }
}
    `;

/**
 * __useSearchSkillsQuery__
 *
 * To run a query within a React component, call `useSearchSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchSkillsQuery({
 *   variables: {
 *      skillName: // value for 'skillName'
 *   },
 * });
 */
export function useSearchSkillsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchSkillsQuery, SearchSkillsQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchSkillsQuery, SearchSkillsQueryVariables>(SearchSkillsDocument, baseOptions);
      }
export function useSearchSkillsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchSkillsQuery, SearchSkillsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchSkillsQuery, SearchSkillsQueryVariables>(SearchSkillsDocument, baseOptions);
        }
export type SearchSkillsQueryHookResult = ReturnType<typeof useSearchSkillsQuery>;
export type SearchSkillsLazyQueryHookResult = ReturnType<typeof useSearchSkillsLazyQuery>;
export type SearchSkillsQueryResult = ApolloReactCommon.QueryResult<SearchSkillsQuery, SearchSkillsQueryVariables>;
export const ViewProfileDocument = gql`
    query ViewProfile($userName: String!) {
  viewProfile(userName: $userName) {
    user {
      ...UserFragments_user
    }
    errors {
      ...ErrorFragments_error
    }
  }
}
    ${UserFragments_UserFragmentDoc}
${ErrorFragments_ErrorFragmentDoc}`;

/**
 * __useViewProfileQuery__
 *
 * To run a query within a React component, call `useViewProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewProfileQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *   },
 * });
 */
export function useViewProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ViewProfileQuery, ViewProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<ViewProfileQuery, ViewProfileQueryVariables>(ViewProfileDocument, baseOptions);
      }
export function useViewProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewProfileQuery, ViewProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ViewProfileQuery, ViewProfileQueryVariables>(ViewProfileDocument, baseOptions);
        }
export type ViewProfileQueryHookResult = ReturnType<typeof useViewProfileQuery>;
export type ViewProfileLazyQueryHookResult = ReturnType<typeof useViewProfileLazyQuery>;
export type ViewProfileQueryResult = ApolloReactCommon.QueryResult<ViewProfileQuery, ViewProfileQueryVariables>;