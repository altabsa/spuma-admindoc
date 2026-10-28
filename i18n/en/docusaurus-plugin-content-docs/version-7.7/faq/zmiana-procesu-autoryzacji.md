---
id: zmiana-procesu-autoryzacji
title: Changing the Authorization Process During Document Workflow
---

# Changing the Authorization Process During Document Workflow

**Reported problem**

The customer wants to modify an existing authorization process, for example by adding a new stage, while some documents are already in progress.

After saving the changes, the following message appears:

```text
Update related documents that are at the initial authorization stage?
```

---

**Solution**

Changing an authorization process while document workflows are in progress may affect documents that already use this process.

If you confirm the message:

1. related open processes will be updated,
2. documents will restart the authorization path from the beginning,
3. the remaining workflow will follow the modified process definition.

If you reject the message, existing documents will remain in their current workflow, but problems may occur due to differences between the current process definition and the state of authorizations started earlier.

### Recommended solution

The safest way to introduce changes is to create a new authorization process.

1. copy or create a new process based on the existing one,
2. introduce the required changes, e.g. add a new stage,
3. detach the old process from document classes,
4. for clarity, rename the old process, e.g. by adding the `OLD` suffix,
5. assign the new process to the appropriate classes,
6. save new documents using the new process,
7. complete documents that started authorization earlier using the old process.

This allows new documents to use the modified workflow, while previously started processes can be completed without changing their existing flow.

---