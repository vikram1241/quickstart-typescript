module.exports = {
  "swagger": "2.0",

  "info": {
    "description": "This is a sample server.",
    "version": "1.0.0",
    "title": "Hobbes API Documentation",
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "basePath": "/api/v1/",
  "tags": [{
      "name": "Evaluations",
      "description": "API Documentation for evaluations"
    },
    {
      "name": "Repositories",
      "description": "API Documentation for repositories"
    }
  ],
  "schemes": ["http", "https"],
  "paths": {
    "/evaluations/evalresults": {
      "post": {
        "tags": ["Evaluations"],
        "summary": "API for updating a specific submission",
        "description": "This API is used for updating the submission based on the stacks opted by the user and the results will be calculated based on the checking.",
        "operationId": "postOneProgramModule",
        "consumes": [
          "application/json",
          "application/xml"
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "authorizations": {
          "oauth2": [{
            "scope": "test:anything",
            "description": "anything"
          }]
        },
        "parameters": [{
          "in": "body",
          "name": "body",
          "description": "Program modules object that needs to be created during the time of post request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/evalresults"
          }
        }],
        "responses": {
          "404": {
            "description": "Error in patchSubmissionEvalResults "
          },
          "200": {
            "description": "Successfully patched evaluation results"
          }
        }
      }
    },
    "/evaluations/workflows": {
      "get": {
        "tags": ["Evaluations"],
        "summary": "List all the Workflows",
        "description": "List all the Workflows on which the user can submit the project and can add the .hobbes files accordingly.",
        "operationId": "getWorkflow",
        "produces": ["application/xml", "application/json"],
        "authorizations": {
          "oauth2": [{
            "scope": "test:anything",
            "description": "anything"
          }]
        },
        "parameters": [{
          // "name": "name",
          "in": "query",
          "description": "Lists all the workflows of stacks in which assignments can be submitted",
          "type": "array",
          "default": undefined
        }],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }

        }
      }
    },
    "/evaluations/stats": {
      "get": {
        "tags": ["Evaluations"],
        "summary": "API for finding workflows submitted per day",
        "description": "Get evaluations done per workflow per day on basis of date ",
        "operationId": "getStats",
        "produces": ["application/xml", "application/json"],
        "parameters": [{
            "name": "asOn",
            "in": "query",
            "description": "Date on which the api is used",
            "type": "date",
            "default": undefined
          }, {
            "name": "stats.submittedOn",
            "in": "query",
            "description": "User time when they have submitted the assignment",
            "type": "date",
            "default": undefined
          },
          {
            "name": "stats.workflow",
            "in": "query",
            "description": "Stack used by the user",
            "type": "string",
            "default": undefined
          },
          {
            "name": "stats.submissions",
            "in": "query",
            "description": "Number of time user has submiited the results",
            "type": "date",
            "default": undefined
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }
        }
      }
    },
    "/evaluations/total": {
      "get": {
        "tags": ["Evaluations"],
        "summary": "Displays the complete the summary of the application ",
        "description": "Displays the complete the summary of the application with detailed view",
        "operationId": "getTotal",
        "produces": ["application/xml", "application/json"],
        "parameters": [{
            "name": "payload",
            "in": "query",
            "description": "It contains repository branch,ownership and gitlab url of the submitted assignments",
            "type": "object",
            "default": undefined
          }, {
            "name": "repoRef",
            "in": "query",
            "description": "Repository Reference",
            "type": "string",
            "default": undefined
          },
          {
            "name": "RepoReftype",
            "in": "query",
            "description": "Repository branch",
            "type": "string",
            "default": undefined
          },
          {
            "name": "status",
            "in": "query",
            "description": "Evaluation result of the assignments",
            "type": "string",
            "default": undefined
          },
          {
            "name": "statusMessage",
            "in": "query",
            "description": "Evaluation status of the assignments",
            "type": "string",
            "default": undefined
          },
          {
            "name": "pastEvaluations",
            "in": "query",
            "description": "contains all the previously submitted assignments",
            "type": "array",
            "default": undefined
          },
          {
            "name": "submittedOn",
            "in": "query",
            "description": "date on which the assignment has been submitted",
            "type": "date",
            "default": undefined
          },
          {
            "name": "username",
            "in": "query",
            "description": "User name of the assignments",
            "type": "string",
            "default": undefined
          },
          {
            "name": "useremail",
            "in": "query",
            "description": "email id of the user",
            "type": "email",
            "default": undefined
          },
          {
            "name": "submittedBy",
            "in": "query",
            "description": "email addresss of the submitter",
            "type": "email",
            "default": undefined
          },
          {
            "name": "submissionId",
            "in": "query",
            "description": "unique id of every user on submission",
            "type": "string",
            "default": undefined
          },
          {
            "name": "repoUrl",
            "in": "query",
            "description": "gitlab url of the assignment",
            "type": "string",
            "default": undefined
          },
          {
            "name": "jobId",
            "in": "query",
            "description": "unique job processing id",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evalParams",
            "in": "query",
            "description": "It contains workflow and scores(cadetTests,commanderTests,eslint)",
            "type": "object",
            "default": undefined
          },
          {
            "name": "statusUpdateOn",
            "in": "query",
            "description": "Submitted assignment time after evaluation",
            "type": "date",
            "default": undefined
          },
          {
            "name": "evalFindings",
            "in": "query",
            "description": "Summary of the user",
            "type": "object",
            "default": undefined
          },
          {
            "name": "evalScores",
            "in": "query",
            "description": "Summarised score of the user",
            "type": "object",
            "default": undefined
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }
        }
      }
    },
    "/evaluations/report/:dayTS": {
      "get": {
        "tags": ["Evaluations"],
        "summary": "Provide summary of evaluations for specified timestamp in seconds",
        "description": "The effective URI is /evaluations/report/:TIMESTAMP and provides summary of evaluations for specified timestamp in seconds",
        "operationId": "getReport",
        "produces": ["application/xml", "application/json"],
        "parameters": [{
            "name": "query",
            "in": "query",
            "description": "It contains the timestamp and users detail in array(ts,tsQ,users)",
            "type": "object",
            "default": undefined
          }, {
            "name": "page",
            "in": "query",
            "description": "Current page number with the data",
            "type": "number",
            "default": undefined
          },
          {
            "name": "count",
            "in": "query",
            "description": "Number of objects data on the current page",
            "type": "number",
            "default": undefined
          },
          {
            "name": "total",
            "in": "query",
            "description": "Total number of pages",
            "type": "number",
            "default": undefined
          },
          {
            "name": "asOn",
            "in": "query",
            "description": "Date on which the api is used",
            "type": "date",
            "default": undefined
          },
          {
            "name": "evaluations",
            "in": "query",
            "description": "It contains all the data objects according to per page",
            "type": "array",
            "default": undefined
          },
          {
            "name": "evaluations.payload",
            "in": "query",
            "description": "It contains repository branch,ownership and gitlab url of the submitted assignments",
            "type": "object",
            "default": undefined
          }, {
            "name": "evaluations.repoRef",
            "in": "query",
            "description": "Repository Reference",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.repoReftype",
            "in": "query",
            "description": "Repository branch",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.status",
            "in": "query",
            "description": "Evaluation result of the assignments",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.statusMessage",
            "in": "query",
            "description": "Evaluation status of the assignments",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.pastEvaluations",
            "in": "query",
            "description": "contains all the previously submitted assignments",
            "type": "array",
            "default": undefined
          },
          {
            "name": "evaluations.submittedOn",
            "in": "query",
            "description": "date on which the assignment has been submitted",
            "type": "date",
            "default": undefined
          },
          {
            "name": "evaluations.username",
            "in": "query",
            "description": "User name of the assignments",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.useremail",
            "in": "query",
            "description": "email id of the user",
            "type": "email",
            "default": undefined
          },
          {
            "name": "evaluations.submittedBy",
            "in": "query",
            "description": "email addresss of the submitter",
            "type": "email",
            "default": undefined
          },
          {
            "name": "evaluations.submissionId",
            "in": "query",
            "description": "unique id of every user on submission",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.repoUrl",
            "in": "query",
            "description": "gitlab url of the assignment",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.jobId",
            "in": "query",
            "description": "unique job processing id",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.evalParams",
            "in": "query",
            "description": "It contains workflow and scores(cadetTests,commanderTests,eslint)",
            "type": "object",
            "default": undefined
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }
        }
      }
    },
    "/evaluations/submissionreport/:dayTS": {
      "get": {
        "tags": ["Evaluations"],
        "summary": "Provide summary of evaluations for specified timestamp in seconds for Cadet only",
        "description": "The effective URI is /evaluations/report/:TIMESTAMP and provides summary of evaluations for specified timestamp in seconds",
        "operationId": "getSubmissionReport",
        "produces": ["application/xml", "application/json"],
        "parameters": [{
            "name": "query",
            "in": "query",
            "description": "It contains the timestamp and users detail in array(ts,tsQ,users)",
            "type": "object",
            "default": undefined
          }, {
            "name": "page",
            "in": "query",
            "description": "Current page number with the data",
            "type": "number",
            "default": undefined
          },
          {
            "name": "count",
            "in": "query",
            "description": "Number of objects data on the current page",
            "type": "number",
            "default": undefined
          },
          {
            "name": "total",
            "in": "query",
            "description": "Total number of pages",
            "type": "number",
            "default": undefined
          },
          {
            "name": "asOn",
            "in": "query",
            "description": "Date on which the api is used",
            "type": "date",
            "default": undefined
          },
          {
            "name": "evaluations",
            "in": "query",
            "description": "It contains all the data objects according to per page",
            "type": "array",
            "default": undefined
          },
          {
            "name": "evaluations.payload",
            "in": "query",
            "description": "It contains repository branch,ownership and gitlab url of the submitted assignments",
            "type": "object",
            "default": undefined
          }, {
            "name": "evaluations.repoRef",
            "in": "query",
            "description": "Repository Reference",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.repoReftype",
            "in": "query",
            "description": "Repository branch",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.status",
            "in": "query",
            "description": "Evaluation result of the assignments",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.statusMessage",
            "in": "query",
            "description": "Evaluation status of the assignments",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.pastEvaluations",
            "in": "query",
            "description": "contains all the previously submitted assignments",
            "type": "array",
            "default": undefined
          },
          {
            "name": "evaluations.submittedOn",
            "in": "query",
            "description": "date on which the assignment has been submitted",
            "type": "date",
            "default": undefined
          },
          {
            "name": "evaluations.username",
            "in": "query",
            "description": "User name of the assignments",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.useremail",
            "in": "query",
            "description": "email id of the user",
            "type": "email",
            "default": undefined
          },
          {
            "name": "evaluations.submittedBy",
            "in": "query",
            "description": "email addresss of the submitter",
            "type": "email",
            "default": undefined
          },
          {
            "name": "evaluations.submissionId",
            "in": "query",
            "description": "unique id of every user on submission",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.repoUrl",
            "in": "query",
            "description": "gitlab url of the assignment",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.jobId",
            "in": "query",
            "description": "unique job processing id",
            "type": "string",
            "default": undefined
          },
          {
            "name": "evaluations.evalParams",
            "in": "query",
            "description": "It contains workflow and scores(cadetTests,commanderTests,eslint)",
            "type": "object",
            "default": undefined
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }
        }
      }
    },
    "/evaluations/submissions/report/:dayTS": {
      "get": {
        "tags": ["Evaluations"],
        "summary": "API for finding evaluation submission of a specific user",
        "description": "On the basis of the time stamp this API is used for finding the evaluation submission of a specific user",
        "operationId": "getSummaryBasedOnTimeStampSpecificUser",
        "produces": ["application/xml", "application/json"],
        "parameters": [{
            "name": "dayTS",
            "in": "path",
            "description": "The time stamp on which the api has been called",
            "type": "string",
            "default": undefined
          },
          {
            "name": "assignment",
            "in": "path",
            "description": "Solution repository URL",
            "type": "string",
            "default": undefined
          },
          {
            "name": "submission",
            "in": "path",
            "description": "Submission repository URL",
            "type": "string",
            "default": undefined
          },
          {
            "name": "users",
            "in": "path",
            "description": "pick the user from current logged in user only, so that users cannot tamper request to view other users details",
            "type": "array",
            "default": undefined
          },
          {
            "name": "order",
            "in": "path",
            "description": "",
            "type": "string",
            "default": undefined
          },
          {
            "name": "q",
            "in": "path",
            "description": "The query of the users",
            "type": "string",
            "default": undefined
          },
          {
            "name": "page",
            "in": "path",
            "description": "Current page number",
            "type": "number",
            "default": undefined
          },
          {
            "name": "limit",
            "in": "path",
            "description": "Total page number",
            "type": "number",
            "default": undefined
          },
          {
            "name": "role",
            "in": "path",
            "description": "When API is called by external systems, this will be empty",
            "type": "string",
            "default": undefined
          },
          {
            "name": "scoreQuery",
            "in": "path",
            "description": "Shows the complete report of the score",
            "type": "string",
            "default": undefined
          },
          {
            "name": "scores",
            "in": "path",
            "description": "Shows the specific report of the assignment ",
            "type": "string",
            "default": undefined
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/evaluations/stream/report/:dayTS": {
      "get": {
        "tags": ["Evaluations"],
        "summary": "Provide summary of evaluations for specified timestamp in seconds",
        "description": "This API is used to provide the summary of evaluations for specified timestamp in seconds",
        "operationId": "getSummaryBasedOnTimeStamp",
        "produces": ["application/xml", "application/json"],
        "parameters": [{
            "name": "dayTS",
            "in": "path",
            "description": "The time stamp on which the api has been called",
            "type": "string",
            "default": undefined
          },
          {
            "name": "assignment",
            "in": "path",
            "description": "Solution repository URL",
            "type": "string",
            "default": undefined
          },
          {
            "name": "submission",
            "in": "path",
            "description": "Submission repository URL",
            "type": "string",
            "default": undefined
          },
          {
            "name": "users",
            "in": "path",
            "description": "The name of the user",
            "type": "string",
            "default": undefined
          },
          {
            "name": "order",
            "in": "path",
            "description": "",
            "type": "string",
            "default": undefined
          },
          {
            "name": "q",
            "in": "path",
            "description": "The query of the users",
            "type": "string",
            "default": undefined
          },
          {
            "name": "page",
            "in": "path",
            "description": "Current page number",
            "type": "number",
            "default": undefined
          },
          {
            "name": "limit",
            "in": "path",
            "description": "Total page number",
            "type": "number",
            "default": undefined
          },
          {
            "name": "workflow",
            "in": "path",
            "description": "Stack on which the assignment has been coded",
            "type": "string",
            "default": undefined
          },
          {
            "name": "role",
            "in": "path",
            "description": "When API is called by external systems, this will be empty",
            "type": "string",
            "default": undefined
          },
          {
            "name": "scoreQuery",
            "in": "path",
            "description": "Shows the complete report of the score",
            "type": "string",
            "default": undefined
          },
          {
            "name": "scores",
            "in": "path",
            "description": "Shows the specific report of the assignment ",
            "type": "string",
            "default": undefined
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/evaluations/submission/:submissionId": {
      "get": {
        "tags": ["Evaluations"],
        "summary": "Get feedback details for specific submission identified by its ID",
        "description": "Based on the submission id of the user ,this API will give the response to check the evaluation of a specific user.",
        "operationId": "getFeedbackDetails",
        "produces": ["application/xml", "application/json"],
        "parameters": [{
          "name": "role",
          "in": "path",
          "description": "The user is Cadet or Commander",
          "type": "string",
          "default": undefined
        }],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/evaluations/feedback/:repoUrl": {
      "get": {
        "tags": ["Evaluations"],
        "summary": "Get feedback details for the specified repository",
        "description": "This API will give the response of feedback of the user repository and check the evaluations of the repository which is submitted.",
        "operationId": "getFeedback",
        "produces": ["application/xml", "application/json"],
        "parameters": [{
            "name": "username",
            "in": "query",
            "description": "User name of the user",
            "type": "string",
            "default": undefined
          },
          {
            "name": "role",
            "in": "query",
            "description": "User is Cadet or Commander",
            "type": "string",
            "default": undefined
          },
          {
            "name": "repoUrl",
            "in": "query",
            "description": "gitlab url of the assignment",
            "type": "string",
            "default": undefined
          },
          {
            "name": "order",
            "in": "path",
            "description": "",
            "type": "string",
            "default": undefined
          },
          {
            "name": "repoRef",
            "in": "query",
            "description": "Repository Reference",
            "type": "string",
            "default": undefined
          },
          {
            "name": "repoReftype",
            "in": "query",
            "description": "Repository branch",
            "type": "string",
            "default": undefined
          },
          {
            "name": "payload",
            "in": "query",
            "description": "It contains repository branch,ownership and gitlab url of the submitted assignments",
            "type": "object",
            "default": undefined
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }
        }
      }
    },
    "/evaluations/:submissionId": {
      "patch": {
        "tags": ["Evaluations"],
        "summary": " API for re-evaluating a specfic submission, which is already submitted, and may be in evaluated state or pending state",
        "description": "This API is useful for re-evaluating without making one more submission",
        "operationId": "updateTSSInModuleSchedule",
        "consumes": [
          "application/json",
          "application/xml"
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "parameters": [{
          "in": "body",
          "name": "body",
          "description": "Only for the commanders ",
          "required": true,
          "schema": {
            "type": "object",
            "properties": {
              "email": {
                "type": "string",
              },
              "submissionId": {
                "type": "string",
              }
            }
          }
        }],
        "responses": {
          "500": {
            "description": "Internal error in re-evaluation, please try ..!'"
          },
          "200": {
            "description": "Successfully performed"
          }
        }
      }
    },
    "/repos/groups": {
      "get": {
        "tags": ["Repositories"],
        "summary": "API for fetching user git groups where user is a member",
        "description": "User git groups are taking from claims",
        "operationId": "getGroups",
        "produces": ["application/xml", "application/json"],
        "parameters": [{
            "name": "id",
            "in": "query",
            "description": "Unique id number for every group",
            "type": "number",
            "default": undefined
          },
          {
            "name": "name",
            "in": "query",
            "description": "Username of the repo owner",
            "type": "string",
            "default": undefined
          },
          {
            "name": "path",
            "in": "query",
            "description": "Repository Path",
            "type": "string",
            "default": undefined
          },
          {
            "name": "description",
            "in": "query",
            "description": "Repository overall behaviour",
            "type": "string",
            "default": undefined
          },
          {
            "name": "visibility",
            "in": "query",
            "description": "",
            "type": "number",
            "default": undefined
          },
          {
            "name": "avatar_url",
            "in": "query",
            "description": "",
            "type": "string",
            "default": undefined
          },
          {
            "name": "web_url",
            "in": "query",
            "description": "Git Repository URL ",
            "type": "string",
            "default": undefined
          },
          {
            "name": "request_access_enabled",
            "in": "query",
            "description": "Accessibility to the group functionality",
            "type": "string",
            "default": undefined
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }

        }
      }

    },
    "/repos/groups/:groupname/members": {
      "get": {
        "tags": ["Repositories"],
        "summary": "API for fetching members of a specific group",
        "description": "API for fetching members of a specific group",
        "operationId": "getGroupsMembers",
        "produces": ["application/xml", "application/json"],
        "parameters": [{
            "name": "username",
            "in": "query",
            "description": "Gitlabs stackroute username",
            "type": "string",
            "default": undefined
          },
          {
            "name": "avatarUrl",
            "in": "query",
            "description": "unique identity of every user",
            "type": "string",
            "default": undefined
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }

        }
      }
    },
    "/repos/groups/stackrepos": {
      "get": {
        "tags": ["Repositories"],
        "summary": "API for fetching stack group repositories",
        "description": "API for fetching stack group repositories",
        "operationId": "getGroupsRepos",
        "produces": ["application/xml", "application/json"],
        "parameters": [{
            "name": "group",
            "in": "query",
            "description": "Group name",
            "type": "string",
            "default": undefined
          },
          {
            "name": "repos",
            "in": "query",
            "description": "repos is an array of objects which contains name,id,description,defaultBranch,ssh,http,web,tags,public,lastActivityAt,stars,forks,openIssues,sharedWithGroups",
            "type": "array",
            "default": undefined
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }

        }
      }
    },
    "/repos": {
      "get": {
        "tags": ["Repositories"],
        "summary": "API for fetching repositories of a specific user",
        "description": "API for fetching repositories of a specific user",
        "operationId": "getRepoOfUser",
        "produces": ["application/xml", "application/json"],
        "parameters": [{
            "name": "user",
            "in": "query",
            "description": "Username of the owner",
            "type": "string",
            "default": undefined
          },
          {
            "name": "repos",
            "in": "query",
            "description": "repos is an array of objects which contains name,id,description,defaultBranch,ssh,http,web,tags,public,lastActivityAt,stars,forks,openIssues,sharedWithGroups",
            "type": "array",
            "default": undefined
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }
        }
      }
    },
    "/repos/stackprojects/:projectId/repository/branches": {
      "get": {
        "tags": ["Repositories"],
        "summary": "API for fetching branches of the specified Assignment or Stack project repository",
        "description": "API for fetching branches of the specified Assignment or Stack project repository",
        "operationId": "getRepoBranches",
        "produces": ["application/xml", "application/json"],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }

        }
      }
    },
    "/repos/projects/:projectId/repository/branches": {
      "get": {
        "tags": ["Repositories"],
        "summary": "API for fetching branches of the specified project repository",
        "description": "API for fetching branches of the specified project repository",
        "operationId": "getRepoOfProjectBranch",
        "produces": ["application/xml", "application/json"],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }

        }
      }
    },
    "/repos/git/users": {
      "get": {
        "tags": ["Repositories"],
        "summary": "API for fetching users from git",
        "description": "API for fetching usernames with matching string from gitlab. if you pass `search` query parameter",
        "operationId": "getGitUser",
        "produces": ["application/xml", "application/json"],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }
        }
      }
    },
    "/repos/broadcast": {
      "get": {
        "tags": ["Repositories"],
        "summary": "API for fetching active broadcast messages from gitlab",
        "description": "Broadcast api will show the message which has been generated by Admin regarding the maintainence or important announcements.",
        "operationId": "getBroadcastMsg",
        "produces": ["application/xml", "application/json"],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "500": {
            "description": "Unexpected internal error, please try later..!"
          }
        }
      }
    }
  },
  "definitions": {
    "evalresults": {
      "type": "object",
      "properties": {
        "username": {
          "type": "string"
        },
        "useremail": {
          "type": "string"
        },
        "submissionId": {
          "type": "string"
        },
        "submittedBy": {
          "type": "string"
        },
        "repoUrl": {
          "type": "string"
        },
        "repoRef": {
          "type": "number"
        },
        "repoReftype": {
          "type": "string"
        },
        "submittedOn": {
          "type": "string"
        },
        "jobId": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "statusMessage": {
          "type": "string"
        },
        "statusupdatedOn": {
          "type": "Date"
        },
        "evalFindings": {
          "type": "object"
        },
        "evalScores": {
          "type": "object"
        },
        "evalSummary": {
          "type": "object"
        },
        "evalParams": {
          "type": "object"
        },
        "pastEvaluations": {
          "type": "object"
        },
        "payload": {
          "type": "object",
          "properties": {
            "solutionRepoUrl": {
              "type": "string"
            },
            "solutionRepoRef": {
              "type": "string"
            },
            "solutionRepoReftype": {
              "type": "number"
            }
          }

        },
        // "payload": {
        //     "type": "array",
        //     "items": {
        //         "type": "object",
        //         "properties": {
        //             "solutionRepoUrl": {
        //                 "type": "string"
        //             },
        //             "solutionRepoRef": {
        //                 "type": "string"
        //             },
        //             "solutionRepoReftype": {
        //                 "type": "number"
        //             }
        //         }
        //     }
        // }
      }

    }
  }

}