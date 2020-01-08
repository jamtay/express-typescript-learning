import { HTTP404Error } from "../../../utils/httpErrors";

export const handleDeletedResponse = (response: any, contactId: string) => {
  if (response.ok !== 1) {
    throw new Error(`Failed to delete contact ${contactId}`);
  }
  if (response.deletedCount === 0) {
    throw new HTTP404Error(`Could not find contact ${contactId} to delete`);
  }
  return {
    message: `Successfully deleted contact ${contactId}`
  };
};