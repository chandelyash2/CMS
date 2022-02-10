import { gql } from '@apollo/client'
export const getData = gql`query GetAllAdminUsers {
  getAllAdminUsers {
    status
    message
    data {
      id
      user {
        userProfilePic
        userProfileName
      }
      email
      posts
      lastSeen
      onBoarded
      accountStatus
      amplifyRatio
      actionRatio
      seenCount
      amplifyCount
      actionCount
    }
  }
}
`
