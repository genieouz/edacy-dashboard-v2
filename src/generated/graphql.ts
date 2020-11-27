import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** Arbitrary object */
  Any: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** TimePoint custom scalar type. examples: 5:45, 12:04, 2:04:09 */
  TimePoint: any;
  /** A custom type, that represents a string, that contains JSON-structured data */
  JsonString: any;
};



export type Query = {
  __typename?: 'Query';
  fetchMyProgramRewardsStats: ProgramRewardStats;
  searchUsersInCohort: Array<User>;
  searchUsersBySymbols: SearchUsersBySymbols;
  fetchCurrentUser: User;
  fetchUsers: Array<User>;
  fetchUser: User;
  simpleUsersSearch: Array<User>;
  fetchUsersByEmails: FindUsersResult;
  fetchRegions: Array<Region>;
  fetchCountries: Array<Country>;
  fetchCountry: Country;
  fetchSoftSkills: Array<Skill>;
  fetchSoftSkill: Skill;
  fetchHardSkills: Array<Skill>;
  fetchHardSkill: Skill;
  fetchMinistries: Array<Ministry>;
  fetchMinistry: Ministry;
  fetchManyLanguages: Array<Language>;
  fetchOneLanguage: Language;
  fetchManyAssessmentQuotients: Array<AssessmentQuotient>;
  fetchOneAssessmentQuotient: AssessmentQuotient;
  fetchManyAssessmentQuotientChoiceConclusions: Array<AssessmentQuotientChoiceConclusion>;
  fetchOneAssessmentQuotientChoiceConclusion: AssessmentQuotientChoiceConclusion;
  fetchManyScaleCaptions: Array<ScaleCaption>;
  fetchOneScaleCaption: ScaleCaption;
  fetchGroups: Array<Group>;
  fetchGroup: Array<Group>;
  fetchMyGroups: Array<Group>;
  fetchMyMentoredPrograms: Array<Program>;
  fetchMyProgramGroup: Group;
  fetchMyMentoredGroups: Array<Group>;
  fetchMyManagedGroups: Array<Group>;
  fetchMyMentoredGroup: Group;
  fetchMyManagedGroup: Group;
  countMyMentoredGroups: Scalars['Int'];
  countMyManagedGroups: Scalars['Int'];
  fetchMyProteges: Array<User>;
  fetchDiscussion: Discussion;
  fetchDiscussionMessage: DiscussionMessage;
  /** Returns only root messages if filterBy is not applied */
  fetchDiscussionMessages: Array<DiscussionMessage>;
  /** Counts only root messages if filterBy is not applied */
  countDiscussionMessages: Scalars['Int'];
  fetchDiscussionsFromTutoredGroups: Array<Discussion>;
  fetchGroupingSetups: Array<GroupingSetup>;
  fetchGroupingSetupForProgram: GroupingSetup;
  fetchProgramInvitationStats: ProgramInvitationsStats;
  fetchManyQuizzes: Array<Quiz>;
  fetchQuiz: Quiz;
  fetchQuizAttempt: QuizAttempt;
  fetchLastQuizAttemptForCurrentUser?: Maybe<QuizAttempt>;
  fetchLastAttemptForAllSectionQuizzesForCurrentUser: Array<QuizLastAttempt>;
  fetchGalleryFolders: Array<GalleryFolder>;
  fetchGalleryFolder: GalleryFolder;
  fetchImagesFromGallery: Array<GalleryImage>;
  fetchManyModules: Array<Module>;
  fetchProgramModule: Module;
  fetchModule: Module;
  fetchModuleSection: Section;
  fetchManyArticleLessons: Array<ArticleLesson>;
  fetchArticleLesson: ArticleLesson;
  fetchManyVideoLessons: Array<VideoLesson>;
  fetchVideoLesson: VideoLesson;
  countMyPeerReviewsForAssignment: Scalars['Int'];
  fetchModuleAssignmentSubmission: Array<AssignmentSubmission>;
  fetchModuleAssignmentSubmissionsForPeerReview: Array<AssignmentSubmission>;
  fetchOneModuleAssignmentSubmission: AssignmentSubmission;
  fetchManyModuleAssignmentSubmissions: Array<AssignmentSubmission>;
  fetchMyModuleAssignmentSubmission: AssignmentSubmission;
  fetchModuleAssignmentSubmissionOfOneLearner: AssignmentSubmission;
  fetchManyQuizAssessments: Array<QuizAssessment>;
  fetchQuizAssessment: QuizAssessment;
  fetchManyCommitmentLessons: Array<CommitmentLesson>;
  fetchCommitmentLesson: CommitmentLesson;
  fetchClassroomResourses: ClassroomResources;
  fetchManyPhases: Array<Phase>;
  fetchPhase: Phase;
  fetchMyPrograms: Array<Program>;
  fetchMyProgram: Program;
  fetchMyManagedPrograms: Array<Program>;
  fetchProgramsCreatedByCurrentUser: Array<Program>;
  countProgramDiscussions: Scalars['Int'];
  countProgramGroupProjects: Scalars['Int'];
  calcAverageProgramCohortProgress: Scalars['Int'];
  calcAverageWeekCohortProgress: Scalars['Int'];
  calcAverageModuleCohortProgress: Scalars['Int'];
  calcProgramProgress: Scalars['Int'];
  calcProgramWeekProgress: Scalars['Int'];
  calcProgramModuleProgress: Scalars['Int'];
  calcProgramModuleSectionProgress: Scalars['Int'];
  calcCompletionEstimationForProgram: Scalars['Long'];
  calcCompletionEstimationForProgramWeek: Scalars['Long'];
  calcCompletionEstimationForProgramModule: Scalars['Long'];
  fetchVisitedSectionIdsForModule: Array<Scalars['String']>;
  countLearnersInCohort: Scalars['Int'];
  fetchLearnersOfProgram: Array<User>;
  fetchTutorsOfProgram: Array<User>;
  fetchProgramCohort: Array<User>;
  fetchNextModule?: Maybe<Module>;
  fetchNextWeek?: Maybe<ProgramWeek>;
  simpleProgramsSearch: Array<Program>;
  fetchManyCategories: Array<Category>;
  fetchCategory: Category;
  fetchPublicPrograms: Array<Program>;
  fetchProgramsBySource: Array<Program>;
  fetchPublicProgram: Program;
  fetchMyModuleSatisfactionFeedback: SatisfactionFeedback;
  fetchSatisfactionFeedbacks: Array<SatisfactionFeedback>;
  fetchManyInVideoQuizzes: Array<InVideoQuiz>;
  fetchInVideoQuiz: InVideoQuiz;
  fetchAssessments: Array<Assessment>;
  fetchAssessment: Assessment;
  fetchAssessmentSubmissions: Array<AssessmentSubmission>;
  fetchMyAssessmentSubmission?: Maybe<AssessmentSubmission>;
  fetchAssessmentSubmission: AssessmentSubmission;
  fetchManyGroupProjects: Array<GroupProject>;
  fetchOneGroupProject: GroupProject;
  fetchPendingGroupProjects: Array<GroupProject>;
  fetchModuleAssignments: Array<ModuleAssignment>;
  fetchModuleAssignment: ModuleAssignment;
  fetchAssignmentsByModule: Array<ModuleAssignment>;
  fetchManyProgramMaintainers: Array<ProgramMaintainer>;
  fetchOneProgramMaintainer: ProgramMaintainer;
  fetchQuizAssessmentAttempt: QuizAssessmentAttempt;
  fetchLastQuizAssessmentAttemptForCurrentUser?: Maybe<QuizAssessmentAttempt>;
  fetchProgramLicence: ProgramLicence;
  fetchProgramLicences: Array<ProgramLicence>;
  analyticsReport: AnalyticsReport;
  getMyProgramModuleMetrics: ProgramModuleMaterialMetrics;
  getMyProgramMetrics: ProgramMaterialMetrics;
  getMyProgramsMetrics: Array<ProgramMaterialMetrics>;
  getMyProgramWeekModulesMetrics: Array<ProgramModuleMaterialMetrics>;
  getMyProgramWeekMetrics: ProgramWeekMaterialMetrics;
  fetchManyPlatformFeedbacks: Array<PlatformFeedback>;
  fetchPlatformFeedback: PlatformFeedback;
  countNotifications: Scalars['Float'];
  fetchNotificationRedirects: Array<NotificationRedirect>;
  fetchChatMessages: Array<ChatMessage>;
  fetchChatChannels: Array<ChatChannel>;
  fetchChatChannel: ChatChannel;
  fetchChatContacts: Array<ChatContact>;
  fetchChatContact: ChatContact;
  countChatContacts: Scalars['Int'];
  provideChatChannelClue: Scalars['String'];
  countTotalUnreadChatMessages: Scalars['Int'];
  countChatChannels: Scalars['Int'];
  countChatMessagesInChannel: Scalars['Int'];
  inspectIntegrityOfUsers: Array<User>;
  fetchPlatformVars: Array<PlatformVar>;
  pokeCleanupForUsers: Array<User>;
  fetchTestUsers: Array<User>;
  countTestUsers: Scalars['Int'];
};


export type QueryFetchMyProgramRewardsStatsArgs = {
  programId: Scalars['ID'];
};


export type QuerySearchUsersInCohortArgs = {
  regionId?: Maybe<Scalars['ID']>;
  searchRegex: Scalars['String'];
  programId: Scalars['ID'];
};


export type QuerySearchUsersBySymbolsArgs = {
  symbols: SearchUsersBySymbolsInput;
};


export type QueryFetchUsersArgs = {
  programId?: Maybe<Scalars['ID']>;
  role?: Maybe<UserRole>;
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchUserArgs = {
  id: Scalars['ID'];
};


export type QuerySimpleUsersSearchArgs = {
  query: Scalars['String'];
};


export type QueryFetchUsersByEmailsArgs = {
  emails: Array<Scalars['String']>;
};


export type QueryFetchRegionsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchCountriesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchCountryArgs = {
  id: Scalars['ID'];
};


export type QueryFetchSoftSkillsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchSoftSkillArgs = {
  id: Scalars['ID'];
};


export type QueryFetchHardSkillsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchHardSkillArgs = {
  id: Scalars['ID'];
};


export type QueryFetchMinistriesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchMinistryArgs = {
  id: Scalars['ID'];
};


export type QueryFetchManyLanguagesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchOneLanguageArgs = {
  id: Scalars['ID'];
};


export type QueryFetchManyAssessmentQuotientsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchOneAssessmentQuotientArgs = {
  assessmentQuotientId: Scalars['ID'];
};


export type QueryFetchManyAssessmentQuotientChoiceConclusionsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchOneAssessmentQuotientChoiceConclusionArgs = {
  assessmentQuotientChoiceConclusionId: Scalars['ID'];
};


export type QueryFetchManyScaleCaptionsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchOneScaleCaptionArgs = {
  scaleCaptionId: Scalars['ID'];
};


export type QueryFetchGroupsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchGroupArgs = {
  id: Scalars['ID'];
};


export type QueryFetchMyGroupsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchMyMentoredProgramsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchMyProgramGroupArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchMyMentoredGroupsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchMyManagedGroupsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchMyMentoredGroupArgs = {
  groupId: Scalars['ID'];
};


export type QueryFetchMyManagedGroupArgs = {
  groupId: Scalars['ID'];
};


export type QueryCountMyMentoredGroupsArgs = {
  programId: Scalars['ID'];
};


export type QueryCountMyManagedGroupsArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchMyProtegesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type QueryFetchDiscussionMessageArgs = {
  messageId: Scalars['ID'];
};


export type QueryFetchDiscussionMessagesArgs = {
  orderDirection?: Maybe<OrderByDirection>;
  clientFilter?: Maybe<ClientFilterInput>;
  filterBy?: Maybe<DiscussionMessageFilterByInput>;
  discussionId: Scalars['ID'];
};


export type QueryCountDiscussionMessagesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  filterBy?: Maybe<DiscussionMessageFilterByInput>;
  discussionId: Scalars['ID'];
};


export type QueryFetchGroupingSetupsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchGroupingSetupForProgramArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchProgramInvitationStatsArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchManyQuizzesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchQuizArgs = {
  id: Scalars['ID'];
};


export type QueryFetchQuizAttemptArgs = {
  id: Scalars['ID'];
};


export type QueryFetchLastQuizAttemptForCurrentUserArgs = {
  quizId: Scalars['ID'];
  moduleSectiondId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchLastAttemptForAllSectionQuizzesForCurrentUserArgs = {
  moduleSectiondId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchGalleryFoldersArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchGalleryFolderArgs = {
  id: Scalars['ID'];
};


export type QueryFetchImagesFromGalleryArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyModulesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchProgramModuleArgs = {
  programModuleId: Scalars['ID'];
  programWeekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchModuleArgs = {
  id: Scalars['ID'];
};


export type QueryFetchModuleSectionArgs = {
  moduleSectionId: Scalars['ID'];
  programModuleId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchManyArticleLessonsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchArticleLessonArgs = {
  id: Scalars['ID'];
};


export type QueryFetchManyVideoLessonsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchVideoLessonArgs = {
  id: Scalars['ID'];
};


export type QueryCountMyPeerReviewsForAssignmentArgs = {
  assignment: Scalars['ID'];
  program: Scalars['ID'];
};


export type QueryFetchModuleAssignmentSubmissionArgs = {
  moduleAssignmentId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchModuleAssignmentSubmissionsForPeerReviewArgs = {
  moduleAssignmentId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchOneModuleAssignmentSubmissionArgs = {
  id: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchManyModuleAssignmentSubmissionsArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchMyModuleAssignmentSubmissionArgs = {
  moduleAssignmentId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchModuleAssignmentSubmissionOfOneLearnerArgs = {
  learnerId: Scalars['ID'];
  moduleAssignmentId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchManyQuizAssessmentsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchQuizAssessmentArgs = {
  id: Scalars['ID'];
};


export type QueryFetchManyCommitmentLessonsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchCommitmentLessonArgs = {
  id: Scalars['ID'];
};


export type QueryFetchClassroomResoursesArgs = {
  moduleId: Scalars['ID'];
};


export type QueryFetchManyPhasesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchPhaseArgs = {
  id: Scalars['ID'];
};


export type QueryFetchMyProgramsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchMyProgramArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchMyManagedProgramsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchProgramsCreatedByCurrentUserArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryCountProgramDiscussionsArgs = {
  programId: Scalars['ID'];
};


export type QueryCountProgramGroupProjectsArgs = {
  programId: Scalars['ID'];
};


export type QueryCalcAverageProgramCohortProgressArgs = {
  programId: Scalars['ID'];
};


export type QueryCalcAverageWeekCohortProgressArgs = {
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryCalcAverageModuleCohortProgressArgs = {
  moduleId: Scalars['ID'];
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryCalcProgramProgressArgs = {
  userId?: Maybe<Scalars['ID']>;
  programId: Scalars['ID'];
};


export type QueryCalcProgramWeekProgressArgs = {
  userId?: Maybe<Scalars['ID']>;
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryCalcProgramModuleProgressArgs = {
  userId?: Maybe<Scalars['ID']>;
  moduleId: Scalars['ID'];
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryCalcProgramModuleSectionProgressArgs = {
  userId?: Maybe<Scalars['ID']>;
  sectionId: Scalars['ID'];
  moduleId: Scalars['ID'];
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryCalcCompletionEstimationForProgramArgs = {
  userId?: Maybe<Scalars['ID']>;
  programId: Scalars['ID'];
};


export type QueryCalcCompletionEstimationForProgramWeekArgs = {
  userId?: Maybe<Scalars['ID']>;
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryCalcCompletionEstimationForProgramModuleArgs = {
  userId?: Maybe<Scalars['ID']>;
  moduleId: Scalars['ID'];
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchVisitedSectionIdsForModuleArgs = {
  moduleId: Scalars['ID'];
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryCountLearnersInCohortArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchLearnersOfProgramArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchTutorsOfProgramArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchProgramCohortArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchNextModuleArgs = {
  currentModuleId: Scalars['ID'];
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchNextWeekArgs = {
  currentWeekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QuerySimpleProgramsSearchArgs = {
  query: Scalars['String'];
};


export type QueryFetchManyCategoriesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryFetchPublicProgramsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchProgramsBySourceArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  source: UserSource;
};


export type QueryFetchPublicProgramArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchMyModuleSatisfactionFeedbackArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchSatisfactionFeedbacksArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyInVideoQuizzesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchInVideoQuizArgs = {
  id: Scalars['ID'];
};


export type QueryFetchAssessmentsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchAssessmentArgs = {
  assessmentId: Scalars['ID'];
};


export type QueryFetchAssessmentSubmissionsArgs = {
  assessmentId: Scalars['ID'];
  programId: Scalars['ID'];
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchMyAssessmentSubmissionArgs = {
  assessmentId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchAssessmentSubmissionArgs = {
  assessmentSubmissionId: Scalars['ID'];
};


export type QueryFetchManyGroupProjectsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchOneGroupProjectArgs = {
  groupProjectId: Scalars['ID'];
};


export type QueryFetchPendingGroupProjectsArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchModuleAssignmentsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchModuleAssignmentArgs = {
  programId: Scalars['ID'];
  id: Scalars['ID'];
};


export type QueryFetchAssignmentsByModuleArgs = {
  programId: Scalars['ID'];
  moduleId: Scalars['ID'];
};


export type QueryFetchManyProgramMaintainersArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchOneProgramMaintainerArgs = {
  programMaintainerId: Scalars['ID'];
};


export type QueryFetchQuizAssessmentAttemptArgs = {
  id: Scalars['ID'];
};


export type QueryFetchLastQuizAssessmentAttemptForCurrentUserArgs = {
  quizAssessmentId: Scalars['ID'];
  moduleSectiondId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchProgramLicenceArgs = {
  programLicenceId: Scalars['ID'];
};


export type QueryFetchProgramLicencesArgs = {
  clientFilter: ClientFilterInput;
};


export type QueryAnalyticsReportArgs = {
  analyticsReportInput?: Maybe<AnalyticsReportInput>;
};


export type QueryGetMyProgramModuleMetricsArgs = {
  moduleId: Scalars['ID'];
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryGetMyProgramMetricsArgs = {
  programId: Scalars['ID'];
};


export type QueryGetMyProgramWeekModulesMetricsArgs = {
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryGetMyProgramWeekMetricsArgs = {
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchManyPlatformFeedbacksArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchPlatformFeedbackArgs = {
  platformFeedbackId: Scalars['ID'];
};


export type QueryCountNotificationsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  dateRange?: Maybe<DateRangeInput>;
};


export type QueryFetchChatMessagesArgs = {
  channelId: Scalars['ID'];
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchChatChannelsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchChatChannelArgs = {
  chatChannelId: Scalars['ID'];
};


export type QueryFetchChatContactsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchChatContactArgs = {
  chatContactId: Scalars['ID'];
};


export type QueryCountChatContactsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryProvideChatChannelClueArgs = {
  membersIds: Array<Scalars['ID']>;
};


export type QueryCountChatChannelsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryCountChatMessagesInChannelArgs = {
  channelId: Scalars['ID'];
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryInspectIntegrityOfUsersArgs = {
  source: UserSource;
};


export type QueryPokeCleanupForUsersArgs = {
  emails: Array<Scalars['String']>;
};

export type ProgramRewardStats = {
  __typename?: 'ProgramRewardStats';
  program: Program;
  weeksRewardStats: Array<WeekRewardStats>;
};

export type Program = {
  __typename?: 'Program';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  category?: Maybe<Category>;
  startsAt?: Maybe<Scalars['Date']>;
  source: UserSource;
  type: ProgramType;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  weeks?: Maybe<Array<ProgramWeek>>;
  poster?: Maybe<ImageSizes>;
  groups: Array<Group>;
  learners: Array<User>;
  maintainers?: Maybe<Array<ProgramMaintainer>>;
  managers?: Maybe<Array<User>>;
  videoUrl?: Maybe<Scalars['String']>;
  syllabus?: Maybe<AttachmentRecord>;
  introVideoThumb?: Maybe<ImageSizes>;
  duration: Scalars['Long'];
  labels?: Maybe<Array<ProgramLabel>>;
  availableRewards: Array<EffortReward>;
  isAutomaticGroupingEnabled: Scalars['Boolean'];
  earnedRewardsSize: Scalars['Int'];
  availableRewardsSize: Scalars['Int'];
  onlineOnly: Scalars['Boolean'];
  lifecycleStage: ProgramLifecycleStage;
  createdBy: User;
  licenceRequirement?: Maybe<ProgramLicenceRequirement>;
  isStarted: Scalars['Boolean'];
  willStartAfterMs: Scalars['Long'];
  totalGroups: Scalars['Int'];
  totalAssignments: Scalars['Int'];
  totalVideoLessons: Scalars['Int'];
  totalArticleLessons: Scalars['Int'];
  totalSubjectDiscussions: Scalars['Int'];
  totalAssessments: Scalars['Int'];
  totalQuizzes: Scalars['Int'];
};


export type ProgramWeeksArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
};

/** Roughly speaking it is a website, from which user came from */
export enum UserSource {
  Common = 'Common',
  Oman = 'Oman',
  FiveQs = 'FiveQS',
  Learn = 'Learn',
  Rwanda = 'Rwanda',
  Ethiopia = 'Ethiopia',
  SierraLeone = 'SierraLeone'
}

export enum ProgramType {
  Foundation = 'Foundation',
  Specialization = 'Specialization',
  Intermediate = 'Intermediate'
}

export type ClientFilterInput = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['Any']>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<OrderByInput>;
};


export type OrderByInput = {
  property: Scalars['String'];
  direction: OrderByDirection;
};

/** OrderBy direction */
export enum OrderByDirection {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type ProgramWeek = {
  __typename?: 'ProgramWeek';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  order: Scalars['Long'];
  phase: Phase;
  title: Scalars['String'];
  description: Scalars['String'];
  modules?: Maybe<Array<Module>>;
  duration: Scalars['Long'];
  availableRewardsSize?: Maybe<Scalars['Int']>;
  earnedRewardsSize?: Maybe<Scalars['Int']>;
  totalAssessments: Scalars['Int'];
  totalArticleLessons: Scalars['Int'];
  totalVideoLessons: Scalars['Int'];
  totalSubjectDiscussions: Scalars['Int'];
  totalQuizzes: Scalars['Int'];
  totalQuizzesAndAssessments: Scalars['Int'];
  totalAssignments: Scalars['Int'];
  totalSubmittedQuizzes: Scalars['Int'];
  availableQuizzes: Array<Quiz>;
  availableAssignments: Array<ModuleAssignment>;
  totalSubmittedAssignments: Scalars['Int'];
};


export type Phase = {
  __typename?: 'Phase';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Module = {
  __typename?: 'Module';
  id: Scalars['ID'];
  order: Scalars['Long'];
  name: Scalars['String'];
  description: Scalars['String'];
  sections: Array<Section>;
  duration: Scalars['Long'];
  requiresFeedback: Scalars['Boolean'];
  totalAssignmentSubmissionsWithoutMyReview?: Maybe<Scalars['Int']>;
  availableRewardsSize: Scalars['Int'];
  earnedRewardsSize?: Maybe<Scalars['Int']>;
  totalVideoLessons: Scalars['Int'];
  totalArticleLessons: Scalars['Int'];
  totalAssessments: Scalars['Int'];
  totalAssignments: Scalars['Int'];
  totalQuizzes: Scalars['Int'];
  totalSubjectDiscussions: Scalars['Int'];
  materialIndex: ProgramMaterialIndex;
};


export type ModuleAvailableRewardsSizeArgs = {
  programId: Scalars['ID'];
};


export type ModuleEarnedRewardsSizeArgs = {
  programId: Scalars['ID'];
};

export type Section = {
  __typename?: 'Section';
  id: Scalars['ID'];
  order: Scalars['Long'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: ModuleSectionType;
  additionalReading: Array<AdditionalReading>;
  content?: Maybe<ModuleSectionContentUnion>;
  duration: Scalars['Long'];
  contentDiscussion?: Maybe<Discussion>;
  materialIndex: ProgramMaterialIndex;
  availableRewardsSize: Scalars['Int'];
};


export type SectionAvailableRewardsSizeArgs = {
  moduleId: Scalars['ID'];
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};

/** Type of module section */
export enum ModuleSectionType {
  VideoLesson = 'VideoLesson',
  ArticleLesson = 'ArticleLesson',
  Quiz = 'Quiz',
  QuizAssessment = 'QuizAssessment',
  SubjectDiscussion = 'SubjectDiscussion',
  Assessment = 'Assessment',
  Assignment = 'Assignment',
  Maintainers = 'Maintainers',
  CommitmentLesson = 'CommitmentLesson'
}

export type AdditionalReading = {
  __typename?: 'AdditionalReading';
  id: Scalars['ID'];
  icon: Scalars['String'];
  title: Scalars['String'];
  link: Scalars['String'];
};

export type ModuleSectionContentUnion = Discussion | ArticleLesson | CommitmentLesson | VideoLesson | Quiz | Assessment | ModuleAssignment | QuizAssessment;

export type Discussion = {
  __typename?: 'Discussion';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type: DiscussionType;
  messages: Array<DiscussionMessage>;
  isActive: Scalars['Boolean'];
  bounds?: Maybe<DiscussionBounds>;
  host: DiscussionHostUnion;
  countMessages: Scalars['Int'];
};


export type DiscussionMessagesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type DiscussionCountMessagesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};

/** Type of Discussion */
export enum DiscussionType {
  LessonSubjectDiscussion = 'LessonSubjectDiscussion',
  LessonContentDiscussion = 'LessonContentDiscussion',
  GroupTopicDiscussion = 'GroupTopicDiscussion',
  GroupBroadcasts = 'GroupBroadcasts',
  GroupIntroductions = 'GroupIntroductions'
}

export type DiscussionMessage = {
  __typename?: 'DiscussionMessage';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  discussion?: Maybe<Discussion>;
  user: User;
  text: Scalars['String'];
  isPinned: Scalars['Boolean'];
  isBroadcast: Scalars['Boolean'];
  textUpdatedAt?: Maybe<Scalars['Date']>;
  votes?: Maybe<Array<MessageVote>>;
  votesBalance: Scalars['Int'];
  totalNext?: Maybe<Scalars['Int']>;
  totalPrev?: Maybe<Scalars['Int']>;
  nestingLevel: Scalars['Int'];
  origin?: Maybe<DiscussionMessage>;
  parent?: Maybe<DiscussionMessage>;
  root?: Maybe<DiscussionMessage>;
  replies: Array<DiscussionMessage>;
  offspring: Array<DiscussionMessage>;
  totalOffspring: Scalars['Int'];
  totalReplies: Scalars['Int'];
  totalPositiveVotes: Scalars['Int'];
  totalNegativeVotes: Scalars['Int'];
  myVote?: Maybe<MessageVote>;
  attachments: Array<AttachmentRecord>;
};


export type DiscussionMessageTotalNextArgs = {
  orderDirection?: Maybe<OrderByDirection>;
};


export type DiscussionMessageTotalPrevArgs = {
  orderDirection?: Maybe<OrderByDirection>;
};


export type DiscussionMessageRepliesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type DiscussionMessageOffspringArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  role: RegisterUserRole;
  language: SupportedLanguage;
  profile: Profile;
  notificationSettings: NotificationSettings;
  usedTours: Array<PlatformTour>;
  source: UserSource;
  lastActivityAt: Scalars['Date'];
  isTest: Scalars['Boolean'];
  isConfirmed: Scalars['Boolean'];
  totalRewardsSize: Scalars['Int'];
  totalTutoredGroups: Scalars['Int'];
  submittedQuizAttempts: Array<QuizAttempt>;
  quizLearnerMetrics: Array<QuizLearnerMetrics>;
  submittedModuleAssignments: Array<AssignmentSubmission>;
  isOnline: Scalars['Boolean'];
};


export type UserTotalTutoredGroupsArgs = {
  programId: Scalars['ID'];
};


export type UserSubmittedQuizAttemptsArgs = {
  weekId?: Maybe<Scalars['ID']>;
  programId?: Maybe<Scalars['ID']>;
};


export type UserQuizLearnerMetricsArgs = {
  weekId?: Maybe<Scalars['ID']>;
  programId?: Maybe<Scalars['ID']>;
};


export type UserSubmittedModuleAssignmentsArgs = {
  weekId?: Maybe<Scalars['ID']>;
  programId?: Maybe<Scalars['ID']>;
};

/** User Role in the platform, available to register */
export enum RegisterUserRole {
  Learner = 'Learner',
  Tutor = 'Tutor',
  ContentManager = 'ContentManager',
  UserManager = 'UserManager',
  ProgramManager = 'ProgramManager',
  Instructor = 'Instructor',
  Admin = 'Admin'
}

/** Interface and Notifications language */
export enum SupportedLanguage {
  En = 'En',
  Fr = 'Fr',
  Ar = 'Ar'
}

export type Profile = {
  __typename?: 'Profile';
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  fullName: Scalars['String'];
  dateOfBirth?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['String']>;
  secondaryEmail?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  whatsAppNumber?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  nationality?: Maybe<Country>;
  region?: Maybe<Region>;
  education?: Maybe<Array<EducationEntry>>;
  isUnemployed: Scalars['Boolean'];
  employment?: Maybe<Array<EmploymentEntry>>;
  currentEmployment?: Maybe<EmploymentEntry>;
  softSkills: Array<Skill>;
  hardSkills: Array<Skill>;
  otherSkills: Array<Scalars['String']>;
  gender?: Maybe<Gender>;
  avatar?: Maybe<ImageSizes>;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  latlong: Array<Scalars['Float']>;
};

export type Region = {
  __typename?: 'Region';
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  countryCode: Scalars['String'];
  latlong: Array<Scalars['Float']>;
};

export type EducationEntry = {
  __typename?: 'EducationEntry';
  id: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  institution: Scalars['String'];
  qualification: EducationQualification;
  major: Scalars['String'];
  startedAt: Scalars['Date'];
  finishedAt?: Maybe<Scalars['Date']>;
  currentlyStudyHere?: Maybe<Scalars['Boolean']>;
};

/** Education Qualification */
export enum EducationQualification {
  PrimarySchool = 'PrimarySchool',
  HighSchool = 'HighSchool',
  SpecialistsDegree = 'SpecialistsDegree',
  BachelorsDegree = 'BachelorsDegree',
  MastersDegree = 'MastersDegree',
  PhD = 'PhD'
}

export type EmploymentEntry = {
  __typename?: 'EmploymentEntry';
  id: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  organisation?: Maybe<Scalars['String']>;
  ministry?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  position: Scalars['String'];
  employmentType?: Maybe<EmploymentType>;
  startedAt: Scalars['Date'];
  finishedAt?: Maybe<Scalars['Date']>;
  currentlyWorkHere: Scalars['Boolean'];
};

/** Type of employment */
export enum EmploymentType {
  FullTime = 'FullTime',
  PartTime = 'PartTime',
  Contract = 'Contract',
  SelfEmployed = 'SelfEmployed',
  Internship = 'Internship'
}

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Gender of user */
export enum Gender {
  Male = 'Male',
  Female = 'Female'
}

export type ImageSizes = {
  __typename?: 'ImageSizes';
  sm?: Maybe<Scalars['ID']>;
  md?: Maybe<Scalars['ID']>;
  lg?: Maybe<Scalars['ID']>;
};

export type NotificationSettings = {
  __typename?: 'NotificationSettings';
  email: Array<NotificationsGroup>;
  sms: Array<NotificationsGroup>;
  push: Array<NotificationsGroup>;
  whatsApp: Array<NotificationsGroup>;
};

/** Group of notifications */
export enum NotificationsGroup {
  LearningProcess = 'LearningProcess',
  Groups = 'Groups',
  MarketingCommunications = 'MarketingCommunications'
}

export enum PlatformTour {
  Dashboard = 'Dashboard',
  Modules = 'Modules',
  Weeks = 'Weeks',
  Classroom = 'Classroom',
  Program = 'Program'
}

export type QuizAttempt = {
  __typename?: 'QuizAttempt';
  id: Scalars['ID'];
  user: User;
  successPercent?: Maybe<Scalars['Int']>;
  answers: Array<QuizAnswerAttempt>;
  quiz: Quiz;
  moduleSection: Scalars['ID'];
  quizPlacement: QuizPlacement;
  program: Scalars['ID'];
  score: Scalars['Float'];
};

export type QuizAnswerAttempt = {
  __typename?: 'QuizAnswerAttempt';
  id: Scalars['ID'];
  question: Scalars['ID'];
  pickedOptions: Array<Scalars['String']>;
  answeredText?: Maybe<Scalars['String']>;
};

export type Quiz = {
  __typename?: 'Quiz';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  feedbackText: Scalars['String'];
  questions: Array<QuizQuestion>;
  quizType: QuizType;
  passPercent?: Maybe<Scalars['Int']>;
  totalSubmissionsInGroup?: Maybe<Scalars['Int']>;
  totalSubmissions: Scalars['Int'];
};


export type QuizTotalSubmissionsArgs = {
  programId?: Maybe<Scalars['ID']>;
};

export type QuizQuestion = {
  __typename?: 'QuizQuestion';
  id: Scalars['ID'];
  answerOptions: Array<QuizQuestionAnswerOption>;
  questionType: QuestionType;
  questionText: Scalars['String'];
  weight: Scalars['Float'];
};

export type QuizQuestionAnswerOption = {
  __typename?: 'QuizQuestionAnswerOption';
  id: Scalars['ID'];
  text: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  weight: Scalars['Float'];
};

export enum QuestionType {
  SingleAnswer = 'SingleAnswer',
  MultiAnswer = 'MultiAnswer',
  OpenEnded = 'OpenEnded'
}

export enum QuizType {
  OpinionBased = 'OpinionBased',
  EvaluationBased = 'EvaluationBased',
  ScoreBased = 'ScoreBased'
}

export enum QuizPlacement {
  InVideo = 'InVideo',
  Standalone = 'Standalone'
}

export type QuizLearnerMetrics = {
  __typename?: 'QuizLearnerMetrics';
  quizId: Scalars['ID'];
  quizType: QuizType;
  lastAttempt?: Maybe<QuizAttempt>;
  totalAttempt: Scalars['Int'];
  averageScore: Scalars['Float'];
  averageSuccessPercent: Scalars['Float'];
};

export type AssignmentSubmission = {
  __typename?: 'AssignmentSubmission';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  assignment: ModuleAssignment;
  submittedBy: User;
  tutorReview?: Maybe<AssignmentSubmissionReview>;
  program: Program;
  sections: Array<AssignmentSectionSubmission>;
  hasMyPeerReview: Scalars['Boolean'];
  peerReviews: Array<AssignmentPeerReview>;
  myPeerReview?: Maybe<AssignmentPeerReview>;
  totalPeerReviews: Scalars['Int'];
  isDraft: Scalars['Boolean'];
};


export type AssignmentSubmissionPeerReviewsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};

export type ModuleAssignment = {
  __typename?: 'ModuleAssignment';
  id: Scalars['ID'];
  dueDate?: Maybe<Scalars['Date']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  sections: Array<ModuleAssignmentSection>;
  attachedFiles: Array<AttachmentRecord>;
  mySubmission?: Maybe<AssignmentSubmission>;
  peerReviewAssessment?: Maybe<Assessment>;
  totalOfMyPeerReviews: Scalars['Int'];
  totalSubmissionsInGroup?: Maybe<Scalars['Int']>;
  submissionCandidates: Array<AssignmentSubmissionCandidate>;
  totals: ModuleAssignmentStats;
  totalSubmissions: Scalars['Int'];
};


export type ModuleAssignmentTotalSubmissionsArgs = {
  programId?: Maybe<Scalars['ID']>;
};

export type ModuleAssignmentSection = {
  __typename?: 'ModuleAssignmentSection';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type AttachmentRecord = {
  __typename?: 'AttachmentRecord';
  id: Scalars['ID'];
  title: Scalars['String'];
  attachmentTarget: AttachmentTarget;
  mimeType: Scalars['String'];
  targetRef: Scalars['ID'];
  sizeB: Scalars['Int'];
  url: Scalars['String'];
  extension: Scalars['String'];
};

/** Attachment Target */
export enum AttachmentTarget {
  ModuleAssignment = 'ModuleAssignment',
  AssignmentSectionSubmission = 'AssignmentSectionSubmission',
  GroupProjectSubmission = 'GroupProjectSubmission',
  Program = 'Program',
  DiscussionMessage = 'DiscussionMessage'
}

export type Assessment = {
  __typename?: 'Assessment';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<AssessmentSection>>;
  additionalQuestions?: Maybe<Array<AdditionalAssessmentQuestion>>;
};

export type AssessmentSection = {
  __typename?: 'AssessmentSection';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  subject: Scalars['String'];
  aspects: Array<AssessmentAspect>;
  scaleCaption: ScaleCaption;
};

export type AssessmentAspect = {
  __typename?: 'AssessmentAspect';
  id: Scalars['ID'];
  title: Scalars['String'];
  quotient: AssessmentQuotient;
};

export type AssessmentQuotient = {
  __typename?: 'AssessmentQuotient';
  id: Scalars['ID'];
  title: Scalars['String'];
  key: Scalars['String'];
  description: Scalars['String'];
};

export type ScaleCaption = {
  __typename?: 'ScaleCaption';
  id: Scalars['ID'];
  slots: Array<ScaleSlot>;
};

export type ScaleSlot = {
  __typename?: 'ScaleSlot';
  id: Scalars['ID'];
  title: Scalars['String'];
  weight: Scalars['Int'];
};

export type AdditionalAssessmentQuestion = {
  __typename?: 'AdditionalAssessmentQuestion';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type AssignmentSubmissionCandidate = {
  __typename?: 'AssignmentSubmissionCandidate';
  user: User;
  group: Group;
  hasSubmitted: Scalars['Boolean'];
  isSubmissionReviewed: Scalars['Boolean'];
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  index: Scalars['Int'];
  learners: Array<User>;
  tutor?: Maybe<User>;
  program: Program;
  name?: Maybe<Scalars['String']>;
  groupMetrics?: Maybe<ProgramMaterialMetrics>;
  totalLearners: Scalars['Int'];
  discussions?: Maybe<Array<Discussion>>;
  projects: Array<GroupProject>;
  quizGroupMetrics: Array<QuizGroupMetrics>;
  averageQuizScore: Scalars['Float'];
  averageQuizPassRate: Scalars['Float'];
  averageQuizFailRate: Scalars['Float'];
  assignmentGroupMetrics: Array<ModuleAssignnmentGroupMetrics>;
};


export type GroupQuizGroupMetricsArgs = {
  weekId?: Maybe<Scalars['ID']>;
};


export type GroupAverageQuizScoreArgs = {
  quizId?: Maybe<Scalars['ID']>;
};


export type GroupAverageQuizPassRateArgs = {
  quizId?: Maybe<Scalars['ID']>;
};


export type GroupAverageQuizFailRateArgs = {
  quizId?: Maybe<Scalars['ID']>;
};


export type GroupAssignmentGroupMetricsArgs = {
  weekId?: Maybe<Scalars['ID']>;
};

export type ProgramMaterialMetrics = {
  __typename?: 'ProgramMaterialMetrics';
  forProgram: ProgramMetrics;
  forWeeks: Array<ProgramWeekMetrics>;
  forModules: Array<ProgramModuleMetrics>;
  forSections: Array<ModuleSectionMetrics>;
};

export type ProgramMetrics = {
  __typename?: 'ProgramMetrics';
  programId: Scalars['ID'];
  progress: Scalars['Float'];
  averageCohortProgress: Scalars['Float'];
};

export type ProgramWeekMetrics = {
  __typename?: 'ProgramWeekMetrics';
  programId: Scalars['ID'];
  weekId: Scalars['ID'];
  isVisited: Scalars['Boolean'];
  progress: Scalars['Float'];
  averageCohortProgress: Scalars['Float'];
  totalActiveMembersInDiscussions: Scalars['Int'];
  totalCommentsInDiscussions: Scalars['Int'];
};

export type ProgramModuleMetrics = {
  __typename?: 'ProgramModuleMetrics';
  programId: Scalars['ID'];
  weekId: Scalars['ID'];
  moduleId: Scalars['ID'];
  isVisited: Scalars['Boolean'];
  progress: Scalars['Float'];
  averageCohortProgress: Scalars['Float'];
};

export type ModuleSectionMetrics = {
  __typename?: 'ModuleSectionMetrics';
  programId: Scalars['ID'];
  weekId: Scalars['ID'];
  moduleId: Scalars['ID'];
  sectionId: Scalars['ID'];
  isVisited: Scalars['Boolean'];
  progress: Scalars['Float'];
  averageCohortProgress: Scalars['Float'];
};

export type GroupProject = {
  __typename?: 'GroupProject';
  id: Scalars['ID'];
  title: Scalars['String'];
  dueDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  program: Program;
  submission?: Maybe<GroupProjectSubmission>;
  hasOurSubmission: Scalars['Boolean'];
};

export type GroupProjectSubmission = {
  __typename?: 'GroupProjectSubmission';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  project: GroupProject;
  message: Scalars['String'];
  submittedBy: User;
  group: Group;
  attachment?: Maybe<AttachmentRecord>;
  reviews: Array<GroupProjectReview>;
};

export type GroupProjectReview = {
  __typename?: 'GroupProjectReview';
  id: Scalars['ID'];
  groupProjectSubmission: GroupProjectSubmission;
  reviewedBy: User;
  feedbackText: Scalars['String'];
};

export type QuizGroupMetrics = {
  __typename?: 'QuizGroupMetrics';
  quizId: Scalars['ID'];
  quizType: QuizType;
  totalSubmissionsInGroup: Scalars['Int'];
};

export type ModuleAssignnmentGroupMetrics = {
  __typename?: 'ModuleAssignnmentGroupMetrics';
  assignmentId: Scalars['ID'];
  totalSubmissionsInGroup: Scalars['Int'];
  totalSubmissionsReviewedInGroup: Scalars['Int'];
  totalSubmissionsNotReviewedInGroup: Scalars['Int'];
};

export type ModuleAssignmentStats = {
  __typename?: 'ModuleAssignmentStats';
  expectedNumberOfSubmissions: Scalars['Int'];
  awaitingForMyReview: Scalars['Int'];
  reviewedByMe: Scalars['Int'];
  notReviewedByMe: Scalars['Int'];
};

export type AssignmentSubmissionReview = {
  __typename?: 'AssignmentSubmissionReview';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  assignmentSubmission: AssignmentSubmission;
  reviewedBy: User;
  feedbackText: Scalars['String'];
};

export type AssignmentSectionSubmission = {
  __typename?: 'AssignmentSectionSubmission';
  id: Scalars['ID'];
  section: ModuleAssignmentSection;
  text?: Maybe<Scalars['String']>;
  file?: Maybe<AttachmentRecord>;
};

export type AssignmentPeerReview = {
  __typename?: 'AssignmentPeerReview';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  user: User;
  assignmentSubmission: AssignmentSubmission;
  feedbackText: Scalars['String'];
  assessment?: Maybe<AssessmentSubmission>;
};

export type AssessmentSubmission = {
  __typename?: 'AssessmentSubmission';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  submittedBy: User;
  program: Program;
  sections: Array<AssessmentSectionSubmission>;
  assessment: Assessment;
  additionalAnswers?: Maybe<Array<SubmittedAssessmentAdditionalAnswer>>;
  conclusion?: Maybe<Scalars['String']>;
  quotientsSequences: Array<AssessmentQuotient>;
};


export type AssessmentSubmissionQuotientsSequencesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};

export type AssessmentSectionSubmission = {
  __typename?: 'AssessmentSectionSubmission';
  id: Scalars['ID'];
  section: AssessmentSection;
  aspects: Array<AssessmentAspectSubmission>;
};

export type AssessmentAspectSubmission = {
  __typename?: 'AssessmentAspectSubmission';
  id: Scalars['ID'];
  aspect: AssessmentAspect;
  pickedWeight: Scalars['Long'];
  quotient: AssessmentQuotient;
};

export type SubmittedAssessmentAdditionalAnswer = {
  __typename?: 'SubmittedAssessmentAdditionalAnswer';
  id: Scalars['ID'];
  additionalQuestion: AdditionalAssessmentQuestion;
  answerText: Scalars['String'];
};

export type MessageVote = {
  __typename?: 'MessageVote';
  isPositive: Scalars['Boolean'];
  user: User;
};

export type DiscussionBounds = {
  __typename?: 'DiscussionBounds';
  week?: Maybe<ProgramWeek>;
};

export type DiscussionHostUnion = Section | Group;

export type ArticleLesson = {
  __typename?: 'ArticleLesson';
  id: Scalars['ID'];
  story: Scalars['String'];
};

export type CommitmentLesson = {
  __typename?: 'CommitmentLesson';
  id: Scalars['ID'];
  description: Scalars['String'];
  itemsTitle: Scalars['String'];
  items: Array<Scalars['String']>;
};

export type VideoLesson = {
  __typename?: 'VideoLesson';
  id: Scalars['ID'];
  videoSources: Array<VideoSource>;
  isExternal?: Maybe<Scalars['Boolean']>;
  transcript?: Maybe<Scalars['String']>;
  subtitles?: Maybe<Array<VideoSubtitle>>;
  overlays?: Maybe<Array<VideoOverlay>>;
  thumbnail?: Maybe<ImageSizes>;
  glossaries?: Maybe<Array<VideoGlossary>>;
  quizzes?: Maybe<Array<InVideoQuiz>>;
};

export type VideoSource = {
  __typename?: 'VideoSource';
  id: Scalars['ID'];
  link: Scalars['String'];
  resolution: Scalars['Int'];
  label: Scalars['String'];
  type: Scalars['String'];
};

export type VideoSubtitle = {
  __typename?: 'VideoSubtitle';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  file: Scalars['String'];
  language: SubtitleLanguage;
};

export enum SubtitleLanguage {
  En = 'En',
  Ar = 'Ar',
  Fr = 'Fr'
}

export type VideoOverlay = {
  __typename?: 'VideoOverlay';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  timepointStart: Scalars['TimePoint'];
  timepointEnd: Scalars['TimePoint'];
  jsStyle?: Maybe<Scalars['Any']>;
  jsVariables: Scalars['Any'];
  type: VideoOverlayType;
  title: Scalars['String'];
  items: Array<Scalars['String']>;
};


export enum VideoOverlayType {
  Text = 'Text',
  List = 'List',
  Image = 'Image'
}

export type VideoGlossary = {
  __typename?: 'VideoGlossary';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  timepoint: Scalars['TimePoint'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type InVideoQuiz = {
  __typename?: 'InVideoQuiz';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  questions: Array<QuizQuestion>;
  successText: Scalars['String'];
  failureText: Scalars['String'];
  tooltipText: Scalars['String'];
  attachToTimepoint: Scalars['TimePoint'];
  rewindToTimepoint: Scalars['TimePoint'];
  videoLesson: Scalars['ID'];
  quizType: QuizType;
  passPercent: Scalars['Int'];
};

export type QuizAssessment = {
  __typename?: 'QuizAssessment';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  feedbackText: Scalars['String'];
  questions: Array<QuizAssessmentQuestion>;
  aspects: Array<QuizAssessmentAspect>;
};

export type QuizAssessmentQuestion = {
  __typename?: 'QuizAssessmentQuestion';
  id: Scalars['ID'];
  answerOptions: Array<QuizAssessmentAnswerOption>;
  questionType: QuestionType;
  questionText: Scalars['String'];
};

export type QuizAssessmentAnswerOption = {
  __typename?: 'QuizAssessmentAnswerOption';
  id: Scalars['ID'];
  text: Scalars['String'];
  affects: Array<QuizAssessmentAnswerOptionAffects>;
};

export type QuizAssessmentAnswerOptionAffects = {
  __typename?: 'QuizAssessmentAnswerOptionAffects';
  id: Scalars['ID'];
  aspect: Scalars['ID'];
  by: Scalars['Float'];
  operation: Scalars['String'];
};

export type QuizAssessmentAspect = {
  __typename?: 'QuizAssessmentAspect';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  initialValue: Scalars['Float'];
  maxValue: Scalars['Float'];
};

export type ProgramMaterialIndex = {
  __typename?: 'ProgramMaterialIndex';
  isFirstWeek?: Maybe<Scalars['Boolean']>;
  isLastWeek?: Maybe<Scalars['Boolean']>;
  isFirstModule?: Maybe<Scalars['Boolean']>;
  isLastModule?: Maybe<Scalars['Boolean']>;
  programId?: Maybe<Scalars['ID']>;
  weekId?: Maybe<Scalars['ID']>;
  moduleId?: Maybe<Scalars['ID']>;
};

export type ProgramMaintainer = {
  __typename?: 'ProgramMaintainer';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  user: User;
  occupation: Scalars['String'];
  bio: Scalars['String'];
};

export type ProgramLabel = {
  __typename?: 'ProgramLabel';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  icon: GalleryImage;
  title: Scalars['String'];
};

export type GalleryImage = {
  __typename?: 'GalleryImage';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  folder: GalleryFolder;
  filename: Scalars['String'];
  sizes: GalleryImageSizes;
};

export type GalleryFolder = {
  __typename?: 'GalleryFolder';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  title: Scalars['String'];
};

export type GalleryImageSizes = {
  __typename?: 'GalleryImageSizes';
  sm?: Maybe<Scalars['ID']>;
  md?: Maybe<Scalars['ID']>;
  lg?: Maybe<Scalars['ID']>;
  tn?: Maybe<Scalars['ID']>;
};

export type EffortReward = {
  __typename?: 'EffortReward';
  id: Scalars['ID'];
  effortPath: EffortPath;
  effortCategory: EffortCategory;
  effortName: EffortName;
  rewardType: RewardType;
  rewardSize: Scalars['Int'];
  canBeEarnedTimes?: Maybe<Scalars['Int']>;
};

export type EffortPath = {
  __typename?: 'EffortPath';
  id: Scalars['ID'];
  program?: Maybe<Program>;
  week?: Maybe<ProgramWeek>;
  module?: Maybe<Module>;
  section?: Maybe<Section>;
};

export enum EffortCategory {
  Group = 'Group',
  Classroom = 'Classroom'
}

/** Effort rewards for actions */
export enum EffortName {
  PledgeLearningCommitment = 'PledgeLearningCommitment',
  IntroduceYourself = 'IntroduceYourself',
  CommentInGroupDiscussion = 'CommentInGroupDiscussion',
  ReplyCommentInGroupDiscussion = 'ReplyCommentInGroupDiscussion',
  CommentInClassroomDiscussion = 'CommentInClassroomDiscussion',
  ReplyCommentInClassroomDiscussion = 'ReplyCommentInClassroomDiscussion',
  SubmitClassroomAssignment = 'SubmitClassroomAssignment',
  PeerReviewAssignment = 'PeerReviewAssignment',
  AddMessageToLessonContentDiscussion = 'AddMessageToLessonContentDiscussion',
  PeerReview3Assignments = 'PeerReview3Assignments',
  PeerReview4Assignments = 'PeerReview4Assignments'
}

export enum RewardType {
  Point = 'Point'
}

export enum ProgramLifecycleStage {
  InDraft = 'InDraft',
  AvailableForPreview = 'AvailableForPreview',
  EnrollmentOpened = 'EnrollmentOpened',
  EnrollmentClosed = 'EnrollmentClosed',
  Terminated = 'Terminated'
}

export type ProgramLicenceRequirement = {
  __typename?: 'ProgramLicenceRequirement';
  isRequired: Scalars['Boolean'];
  licences: Array<ProgramLicence>;
};

export type ProgramLicence = {
  __typename?: 'ProgramLicence';
  id: Scalars['ID'];
  value: Scalars['String'];
  limit: Scalars['Int'];
};

export type WeekRewardStats = {
  __typename?: 'WeekRewardStats';
  week?: Maybe<ProgramWeek>;
  rewards: Array<RewardStats>;
};

export type RewardStats = {
  __typename?: 'RewardStats';
  effortName: EffortName;
  totalRewardSizeEarned: Scalars['Float'];
  totalRewardSizeAvailable: Scalars['Float'];
};

export type SearchUsersBySymbolsInput = {
  ids?: Maybe<Array<Scalars['ID']>>;
  emails?: Maybe<Array<Scalars['String']>>;
};

export type SearchUsersBySymbols = {
  __typename?: 'SearchUsersBySymbols';
  found: Array<User>;
  notFoundByEmails: Array<Scalars['String']>;
  notFoundByIds: Array<Scalars['ID']>;
  totalFound: Scalars['Int'];
  foundIds: Array<Scalars['ID']>;
};

/** User role */
export enum UserRole {
  Learner = 'Learner',
  Tutor = 'Tutor',
  ContentManager = 'ContentManager',
  UserManager = 'UserManager',
  ProgramManager = 'ProgramManager',
  Instructor = 'Instructor',
  Admin = 'Admin'
}

export type FindUsersResult = {
  __typename?: 'FindUsersResult';
  found: Array<User>;
  notFoundByEmails: Array<Scalars['String']>;
  totalFound: Scalars['Int'];
  totalNotFound: Scalars['Int'];
  foundIds: Array<Scalars['ID']>;
};

export type Ministry = {
  __typename?: 'Ministry';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['ID'];
  code: SupportedLanguage;
  name: Scalars['String'];
};

export type AssessmentQuotientChoiceConclusion = {
  __typename?: 'AssessmentQuotientChoiceConclusion';
  id: Scalars['ID'];
  quotients: Array<AssessmentQuotient>;
  conclusion: Scalars['String'];
};


export type AssessmentQuotientChoiceConclusionQuotientsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};

export type DiscussionMessageFilterByInput = {
  approach: FetchMessagesApproach;
  messageId: Scalars['ID'];
};

/** Approach to fetch messages of discussion */
export enum FetchMessagesApproach {
  OffspringOnly = 'OffspringOnly',
  RepliesOnly = 'RepliesOnly'
}

export type GroupingSetup = {
  __typename?: 'GroupingSetup';
  mechanism: GroupingMechanismType;
  program: Program;
  tutors?: Maybe<Array<User>>;
  awaitingLearners?: Maybe<Array<User>>;
  totalTutors: Scalars['Int'];
};

export enum GroupingMechanismType {
  LevelBased = 'LevelBased'
}

export type ProgramInvitationsStats = {
  __typename?: 'ProgramInvitationsStats';
  used: Array<ProgramInvitation>;
  notUsed: Array<ProgramInvitation>;
  notSent: Array<ProgramInvitation>;
  totalInvitations: Scalars['Int'];
  totalUsed: Scalars['Int'];
  totalNotUsed: Scalars['Int'];
  totalNotSent: Scalars['Int'];
  totalSent: Scalars['Int'];
};


export type ProgramInvitationsStatsUsedArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type ProgramInvitationsStatsNotUsedArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type ProgramInvitationsStatsNotSentArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};

export type ProgramInvitation = {
  __typename?: 'ProgramInvitation';
  invitationProfile: InvitationProfile;
  invitationPassword: Scalars['String'];
  isUsed: Scalars['Boolean'];
  isSent: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type InvitationProfile = {
  __typename?: 'InvitationProfile';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};

export type QuizLastAttempt = {
  __typename?: 'QuizLastAttempt';
  quiz: Scalars['ID'];
  lastAttempt: QuizAttempt;
};

export type ClassroomResources = {
  __typename?: 'ClassroomResources';
  videoLessons?: Maybe<Array<VideoLesson>>;
};

export type SatisfactionFeedback = {
  __typename?: 'SatisfactionFeedback';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  program: Scalars['ID'];
  module: Scalars['ID'];
  learner: User;
  stars: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
};

export type QuizAssessmentAttempt = {
  __typename?: 'QuizAssessmentAttempt';
  id: Scalars['ID'];
  user: Scalars['ID'];
  answers: Array<QuizAssessmentAnswerAttempt>;
  quiz: Scalars['ID'];
  moduleSection: Scalars['ID'];
  program: Scalars['ID'];
  results: Array<QuizAssessmentAttemptAspectResult>;
};

export type QuizAssessmentAnswerAttempt = {
  __typename?: 'QuizAssessmentAnswerAttempt';
  id: Scalars['ID'];
  question: Scalars['ID'];
  pickedOptions: Array<Scalars['String']>;
};

export type QuizAssessmentAttemptAspectResult = {
  __typename?: 'QuizAssessmentAttemptAspectResult';
  id: Scalars['ID'];
  aspect: Scalars['ID'];
  score: Scalars['Float'];
};

export type AnalyticsReportInput = {
  registerFrom?: Maybe<Scalars['Date']>;
  registerTo?: Maybe<Scalars['Date']>;
  programId?: Maybe<Scalars['ID']>;
  weekId?: Maybe<Scalars['ID']>;
  moduleId?: Maybe<Scalars['ID']>;
  activeLearnersSince?: Maybe<Scalars['Int']>;
};

export type AnalyticsReport = {
  __typename?: 'AnalyticsReport';
  newComerLearnerStats: NewComerLearnerStats;
  programActivity?: Maybe<ProgramActivity>;
  programsActivity?: Maybe<Array<ProgramActivity>>;
  programWeekActivity?: Maybe<ProgramWeekActivity>;
  programModuleActivity?: Maybe<ProgramModuleActivity>;
  activeLearnersInPeriod: Array<User>;
};

export type NewComerLearnerStats = {
  __typename?: 'NewComerLearnerStats';
  totalRegistrations: Scalars['Int'];
  totalEnrolled: Scalars['Int'];
  totalCompletedProfile: Scalars['Int'];
  usersRegistred: Array<User>;
  usersEnrolled: Array<User>;
  usersCompletedProfile: Array<User>;
  discussionsExcangedThisWeek: Array<User>;
  usersEngagedConversationsThisWeek: Array<User>;
};

export type ProgramActivity = {
  __typename?: 'ProgramActivity';
  programId: Scalars['ID'];
  totalEngaged: Scalars['Int'];
  totalCompleted: Scalars['Int'];
  weeks: Array<ProgramWeekActivity>;
  totalLearnersWithProgressInRange: Scalars['Int'];
};


export type ProgramActivityTotalLearnersWithProgressInRangeArgs = {
  progressMax: Scalars['Int'];
  progressMin: Scalars['Int'];
};

export type ProgramWeekActivity = {
  __typename?: 'ProgramWeekActivity';
  weekId: Scalars['ID'];
  week: ProgramWeek;
  totalEngaged: Scalars['Int'];
  totalCompleted: Scalars['Int'];
  modules: Array<ProgramModuleActivity>;
  totalLearnersWithProgressInRange: Scalars['Int'];
  users: Array<User>;
  usersCompleted: Array<User>;
};


export type ProgramWeekActivityTotalLearnersWithProgressInRangeArgs = {
  progressMax: Scalars['Int'];
  progressMin: Scalars['Int'];
};

export type ProgramModuleActivity = {
  __typename?: 'ProgramModuleActivity';
  weekId: Scalars['ID'];
  moduleId: Scalars['ID'];
  totalEngaged: Scalars['Int'];
  totalCompleted: Scalars['Int'];
  totalLearnersWithProgressInRange: Scalars['Int'];
};


export type ProgramModuleActivityTotalLearnersWithProgressInRangeArgs = {
  progressMax: Scalars['Int'];
  progressMin: Scalars['Int'];
};

export type ProgramModuleMaterialMetrics = {
  __typename?: 'ProgramModuleMaterialMetrics';
  forModule: ProgramModuleMetrics;
  forSections: Array<ModuleSectionMetrics>;
};

export type ProgramWeekMaterialMetrics = {
  __typename?: 'ProgramWeekMaterialMetrics';
  forWeek: ProgramWeekMetrics;
  forModules: Array<ProgramModuleMetrics>;
  forSections: Array<ModuleSectionMetrics>;
};

export type PlatformFeedback = {
  __typename?: 'PlatformFeedback';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  user: User;
  type: PlatformFeedbackType;
  message: Scalars['String'];
};

export enum PlatformFeedbackType {
  Like = 'Like',
  Bug = 'Bug',
  Idea = 'Idea'
}

export type DateRangeInput = {
  from: Scalars['Date'];
  to?: Maybe<Scalars['Date']>;
};

export type NotificationRedirect = {
  __typename?: 'NotificationRedirect';
  id: Scalars['ID'];
  user: User;
  redirectEmail: Scalars['String'];
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  postedBy: User;
  channel: ChatChannel;
  isPinned: Scalars['Boolean'];
  message: Scalars['String'];
};

export type ChatChannel = {
  __typename?: 'ChatChannel';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  members: Array<ChatMember>;
  lastMessagePostedAt: Scalars['Date'];
  totalUnreadMessages: Scalars['Int'];
};

export type ChatMember = {
  __typename?: 'ChatMember';
  user: User;
  readMessagesBefore: Scalars['Date'];
};

export type ChatContact = {
  __typename?: 'ChatContact';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  role: RegisterUserRole;
  language: SupportedLanguage;
  profile: Profile;
  notificationSettings: NotificationSettings;
  usedTours: Array<PlatformTour>;
  source: UserSource;
  lastActivityAt: Scalars['Date'];
  isTest: Scalars['Boolean'];
  isConfirmed: Scalars['Boolean'];
  totalRewardsSize: Scalars['Int'];
  totalTutoredGroups: Scalars['Int'];
  submittedQuizAttempts: Array<QuizAttempt>;
  quizLearnerMetrics: Array<QuizLearnerMetrics>;
  submittedModuleAssignments: Array<AssignmentSubmission>;
  isOnline: Scalars['Boolean'];
  channelClue: Scalars['String'];
};


export type ChatContactTotalTutoredGroupsArgs = {
  programId: Scalars['ID'];
};


export type ChatContactSubmittedQuizAttemptsArgs = {
  weekId?: Maybe<Scalars['ID']>;
  programId?: Maybe<Scalars['ID']>;
};


export type ChatContactQuizLearnerMetricsArgs = {
  weekId?: Maybe<Scalars['ID']>;
  programId?: Maybe<Scalars['ID']>;
};


export type ChatContactSubmittedModuleAssignmentsArgs = {
  weekId?: Maybe<Scalars['ID']>;
  programId?: Maybe<Scalars['ID']>;
};

export type PlatformVar = {
  __typename?: 'PlatformVar';
  name: Scalars['String'];
  value: Scalars['JsonString'];
  forRoles: Array<UserRole>;
  canBeUpdatedByMe: Scalars['Boolean'];
};


export type Mutation = {
  __typename?: 'Mutation';
  chargeCard?: Maybe<Payment>;
  automaticallyAssignPointsForPastActions: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
  setUserLanguage: Scalars['Boolean'];
  updateNotificationsSettings: User;
  useTour: Scalars['Boolean'];
  resetTours: Scalars['Boolean'];
  updateUserRole: Scalars['Boolean'];
  updateRoleForUsers: Scalars['Int'];
  confirmUsers: Scalars['Int'];
  updatePrimaryEmailForUser: Scalars['Boolean'];
  updateSecondaryEmailForUser: Scalars['Boolean'];
  updatePhoneNumberForUser: Scalars['Boolean'];
  updatePersonalDetails: Scalars['Boolean'];
  addEducationEntry: EducationEntry;
  removeEducationEntry: Scalars['Boolean'];
  updateEducationEntry: User;
  setEmploymentStatus: Scalars['Boolean'];
  addEmploymentEntry: EmploymentEntry;
  updateEmploymentEntry: User;
  removeEmploymentEntry: Scalars['Boolean'];
  rewriteSoftSkills: Scalars['Boolean'];
  rewriteHardSkills: Scalars['Boolean'];
  rewriteOtherSkills: Scalars['Boolean'];
  upsertRegion: Region;
  removeRegion: Scalars['Boolean'];
  updateCountry: Scalars['Boolean'];
  removeCountry: Scalars['Boolean'];
  createCountry: Country;
  updateSoftSkill: Scalars['Boolean'];
  removeSoftSkill: Scalars['Boolean'];
  createSoftSkill: Skill;
  updateHardSkill: Scalars['Boolean'];
  removeHardSkill: Scalars['Boolean'];
  createHardSkill: Skill;
  updateMinistry: Scalars['Boolean'];
  removeMinistry: Scalars['Boolean'];
  createMinistry: Ministry;
  createLanguage: Language;
  updateLanguage: Scalars['Boolean'];
  removeLanguage: Scalars['Boolean'];
  createAssessmentQuotient: AssessmentQuotient;
  updateAssessmentQuotient: Scalars['Boolean'];
  removeAssessmentQuotient: Scalars['Boolean'];
  createAssessmentQuotientChoiceConclusion: AssessmentQuotientChoiceConclusion;
  updateAssessmentQuotientChoiceConclusion: Scalars['Boolean'];
  removeAssessmentQuotientChoiceConclusion: Scalars['Boolean'];
  createScaleCaption: ScaleCaption;
  updateScaleCaption: Scalars['Boolean'];
  removeScaleCaption: Scalars['Boolean'];
  submitHelpRequest: Scalars['Boolean'];
  addEducationEntryForUser: EducationEntry;
  removeEducationEntryForUser: Scalars['Boolean'];
  updateEducationEntryForUser: User;
  setEmploymentStatusForUser: Scalars['Boolean'];
  addEmploymentEntryForUser: EmploymentEntry;
  updateEmploymentEntryForUser: User;
  removeEmploymentEntryForUser: Scalars['Boolean'];
  rewriteSoftSkillsForUser: Scalars['Boolean'];
  rewriteHardSkillsForUser: Scalars['Boolean'];
  rewriteOtherSkillsForUser: Scalars['Boolean'];
  updatePersonalDetailsForUser: Scalars['Boolean'];
  disbandGroup: Scalars['Int'];
  renameGroup: Scalars['Boolean'];
  createGroup: Group;
  addLearnerToGroup: Group;
  createEmptyGroupsForIdleTutorsInProgram: Scalars['Int'];
  removeLearnerFromGroup: Scalars['Boolean'];
  removeGroup: Scalars['Boolean'];
  assignTutorToGroup: Scalars['Boolean'];
  removeTutorFromGroup: Scalars['Boolean'];
  broadcastMessageToAllGroupsInProgram: BroadcastResult;
  updateDiscussionForGroups: Scalars['Boolean'];
  createTopicDiscussionForGroups: Discussion;
  removeDiscussion: Scalars['Boolean'];
  addMessageToDiscussion: DiscussionMessage;
  replyToDiscussionMessage: DiscussionMessage;
  updateMessageInDiscussion: Scalars['Boolean'];
  updatePinnedStateForDiscussionMessage: Scalars['Boolean'];
  removeMessageFromDiscussion: Scalars['Boolean'];
  upvoteDiscussionMessage: Scalars['Boolean'];
  downvoteDiscussionMessage: Scalars['Boolean'];
  markDiscussionAsActive: Scalars['Boolean'];
  createMissingContentDiscussionsForProgram: Scalars['Int'];
  repostMessageToDiscussions: Scalars['Boolean'];
  broadcastMessageToGroups: Scalars['Boolean'];
  setupGroupingForProgram: GroupingSetup;
  removeGroupingForProgram: Scalars['Boolean'];
  addTutorsToGroupingSetup: GroupingSetup;
  removeTutorsFromProgramGroupingPreferences: RemoveTutorsFromGroupingResult;
  inviteUsersToEnrollProgram: Scalars['Boolean'];
  pokeProgramInvitations: ProgramInvitationPokeResult;
  createQuiz: Quiz;
  updateQuiz: Scalars['Boolean'];
  removeQuiz: Scalars['Boolean'];
  addQuizQuestion: QuizQuestion;
  removeQuizQuestion: Scalars['Boolean'];
  updateQuizQuestion: Quiz;
  submitQuizAttempt: QuizAttempt;
  submitInVideoQuizAttempt: QuizAttempt;
  testEarnedRewardNotification: Scalars['Boolean'];
  submitGroupProject: GroupProjectSubmission;
  submitGroupProjectReview: GroupProjectReview;
  updateGroupProjectReview: Scalars['Boolean'];
  createGalleryFolder: GalleryFolder;
  updateGalleryFolder: Scalars['Boolean'];
  removeGalleryFolder: Scalars['Boolean'];
  removeImageFromGallery: Scalars['Boolean'];
  createModule: Module;
  updateModule: Scalars['Boolean'];
  removeModule: Scalars['Boolean'];
  updateModuleOrder: Scalars['Boolean'];
  updateSectionOrder: Scalars['Boolean'];
  removeSectionFromModule: Scalars['Boolean'];
  updateSection: Scalars['Boolean'];
  addDiscussionSectionToModule: Scalars['Boolean'];
  addLessonSectionToModule: Scalars['Boolean'];
  addAssessmentSectionToModule: Scalars['Boolean'];
  addAssignmentSectionToModule: Scalars['Boolean'];
  addQuizSectionToModule: Scalars['Boolean'];
  addQuizAssessmentSectionToModule: Scalars['Boolean'];
  addMaintainersSectionToModule: Scalars['Boolean'];
  addAdditionalReadingLinkToModuleSection: Module;
  removeAdditionalReadingLinkFromModuleSection: Module;
  createArticleLesson: ArticleLesson;
  updateArticleLesson: Scalars['Boolean'];
  removeArticleLesson: Scalars['Boolean'];
  createVideoLesson: VideoLesson;
  updateVideoLesson: Scalars['Boolean'];
  removeVideoLesson: Scalars['Boolean'];
  addVideoOverlay: VideoOverlay;
  removeVideoOverlay: Scalars['Boolean'];
  updateVideoOverlay: Scalars['Boolean'];
  addVideoSubtitle: VideoSubtitle;
  removeVideoSubtitle: Scalars['Boolean'];
  updateVideoSubtitle: Scalars['Boolean'];
  addVideoGlossary: VideoGlossary;
  removeVideoGlossary: Scalars['Boolean'];
  submitPeerReviewForModuleAssignment: AssignmentPeerReview;
  submitAssignmentSubmissionReview: AssignmentSubmissionReview;
  updateAssignmentSubmissionReview: Scalars['Boolean'];
  submitAssignment: AssignmentSubmission;
  finalizeModuleAssignmentSubmission: Scalars['Boolean'];
  createQuizAssessment: QuizAssessment;
  updateQuizAssessment: Scalars['Boolean'];
  removeQuizAssessment: Scalars['Boolean'];
  addQuizAssessmentQuestion: QuizAssessmentQuestion;
  removeQuizAssessmentQuestion: Scalars['Boolean'];
  updateQuizAssessmentQuestion: Scalars['Boolean'];
  addQuizAssessmentAspect: QuizAssessmentAspect;
  updateQuizAssessmentAspect: Scalars['Boolean'];
  removeQuizAssessmentAspect: Scalars['Boolean'];
  createCommitmentLesson: CommitmentLesson;
  updateCommitmentLesson: Scalars['Boolean'];
  removeCommitmentLesson: Scalars['Boolean'];
  createPhase: Phase;
  updatePhase: Scalars['Boolean'];
  removePhase: Scalars['Boolean'];
  updateProgram: Scalars['Boolean'];
  removeProgram: Scalars['Boolean'];
  terminateProgram: Scalars['Boolean'];
  publishProgram: Scalars['Boolean'];
  upPublishProgram: Scalars['Boolean'];
  createProgram: Program;
  addProgramWeek: ProgramWeek;
  removeProgramWeek: Scalars['Boolean'];
  updateProgramWeek: Program;
  openProgram: Scalars['Boolean'];
  cloneProgramContent: Program;
  closeProgram: Scalars['Boolean'];
  enrollToProgram: Scalars['Boolean'];
  addModuleToProgramWeek: Scalars['Boolean'];
  removeModuleFromProgramWeek: Scalars['Boolean'];
  completeModuleSection: Scalars['Boolean'];
  markModuleSectionAsVisited: Scalars['Boolean'];
  markProgramModuleAsVisited: Scalars['Boolean'];
  markProgramWeekAsVisited: Scalars['Boolean'];
  addLabelToProgram: ProgramLabel;
  removeLabelFromProgram: Scalars['Boolean'];
  updateLabelInProgram: Program;
  updateAutomaticGroupingSettingForProgram: Scalars['Boolean'];
  updateIsOnlineOnlySettingForProgram: Scalars['Boolean'];
  addManagersToProgram: Scalars['Boolean'];
  removeManagersFromProgram: Scalars['Boolean'];
  createCategory: Category;
  updateCategory: Scalars['Boolean'];
  removeCategory: Scalars['Boolean'];
  submitModuleSatisfactionFeedback: SatisfactionFeedback;
  createInVideoQuiz: InVideoQuiz;
  updateInVideoQuiz: Scalars['Boolean'];
  removeInVideoQuiz: Scalars['Boolean'];
  createAssessment: Assessment;
  updateAssessmentDetails: Scalars['Boolean'];
  removeAssessment: Scalars['Boolean'];
  addSectionToAssessment: AssessmentSection;
  updateSectionInAssessment: Scalars['Boolean'];
  removeSectionInAssessment: Scalars['Boolean'];
  addAdditionalQuestionToAssessment: AdditionalAssessmentQuestion;
  updateAdditionalQuestionInAssessment: Scalars['Boolean'];
  removeAdditionalQuestionInAssessment: Scalars['Boolean'];
  submitAssessment: AssessmentSubmission;
  createGroupProject: GroupProject;
  updateGroupProject: Scalars['Boolean'];
  removeGroupProject: Scalars['Boolean'];
  updateModuleAssignment: Scalars['Boolean'];
  removeModuleAssignment: Scalars['Boolean'];
  createModuleAssignment: ModuleAssignment;
  addModuleAssignmentSection: ModuleAssignmentSection;
  removeModuleAssignmentSection: Scalars['Boolean'];
  updateModuleAssignmentSection: ModuleAssignment;
  attachPeerReviewAssessmentToModuleAssignment: Scalars['Boolean'];
  createProgramMaintainer: ProgramMaintainer;
  updateProgramMaintainer: Scalars['Boolean'];
  removeProgramMaintainer: Scalars['Boolean'];
  addMaintainerForProgram: Scalars['Boolean'];
  removeMaintainerFromProgram: Scalars['Boolean'];
  removeAllMaintainersFromProgram: Scalars['Boolean'];
  submitQuizAssessmentAttempt: QuizAssessmentAttempt;
  createProgramLicence: ProgramLicence;
  updateProgramLicence: Scalars['Boolean'];
  removeProgramLicence: Scalars['Boolean'];
  registerUser: Session;
  resendPrimaryEmailConfirmation: Scalars['Boolean'];
  confirmPrimaryEmail: Scalars['String'];
  mobileLogin: Session;
  login: Session;
  logout: Scalars['Boolean'];
  substitutePassword: Scalars['Boolean'];
  startEmailSubstitution: Scalars['Boolean'];
  finishEmailSubstitution: User;
  startResetPassword: Scalars['Boolean'];
  finishResetPassword: Session;
  refreshToken: Scalars['String'];
  startAttachSecondaryEmail: Scalars['Boolean'];
  finishAttachSecondaryEmail: User;
  leavePlatformFeedback: PlatformFeedback;
  testEmailNotification: Scalars['Boolean'];
  testPlatformNotification: Scalars['Boolean'];
  fetchAndViewNotifications: Array<PlatformNotification>;
  markNotificationAsRead: Scalars['Boolean'];
  markNotificationAsViewed: Scalars['Boolean'];
  markAllNotificationsAsRead: Scalars['Boolean'];
  generateTestPlatformNotifications: Array<PlatformNotification>;
  setNotificationRedirect: NotificationRedirect;
  removeNotificationRedirect: Scalars['Boolean'];
  markChatMessagesAsRead: Scalars['Boolean'];
  setTypingInChatChannel: Scalars['Boolean'];
  sendMessageToChatChannel: ChatMessage;
  sendMessageToChatChannels: Array<ChatMessage>;
  provideChatChannelForMeAndMembers: ChatChannel;
  sendDirectChatMessageToMultipleContacts: Array<ChatChannel>;
  assureIntegrityOfUsers: Scalars['Int'];
  updatePlatformVar: PlatformVar;
  cleanupSystemFromUser: Scalars['Boolean'];
  cleanupPublicEvidencesOfUsers: Scalars['Boolean'];
  updateIsTestFlagForUsers: Scalars['Boolean'];
  forceResetPasswordForUser: Scalars['Boolean'];
  cleanupProgressForProgram: Scalars['Boolean'];
};


export type MutationChargeCardArgs = {
  payment: PaymentInput;
};


export type MutationAutomaticallyAssignPointsForPastActionsArgs = {
  programId: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  user: UpdateUserInput;
  id: Scalars['ID'];
};


export type MutationSetUserLanguageArgs = {
  language: SupportedLanguage;
};


export type MutationUpdateNotificationsSettingsArgs = {
  settings: UpdateNotificationsSettingsInput;
};


export type MutationUseTourArgs = {
  tourName: PlatformTour;
};


export type MutationResetToursArgs = {
  tours?: Maybe<Array<PlatformTour>>;
};


export type MutationUpdateUserRoleArgs = {
  userId: Scalars['ID'];
  role: UserRole;
};


export type MutationUpdateRoleForUsersArgs = {
  byEmails: Array<Scalars['String']>;
  role: UserRole;
};


export type MutationConfirmUsersArgs = {
  usersIds: Array<Scalars['ID']>;
};


export type MutationUpdatePrimaryEmailForUserArgs = {
  primaryEmail: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationUpdateSecondaryEmailForUserArgs = {
  secondaryEmail: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationUpdatePhoneNumberForUserArgs = {
  phoneNumber: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationUpdatePersonalDetailsArgs = {
  personal: UpdatePersonalDetailsInput;
};


export type MutationAddEducationEntryArgs = {
  educationEntry: EducationEntryInput;
};


export type MutationRemoveEducationEntryArgs = {
  educationEntryId: Scalars['ID'];
};


export type MutationUpdateEducationEntryArgs = {
  educationEntry: EducationEntryInput;
  educationEntryId: Scalars['ID'];
};


export type MutationSetEmploymentStatusArgs = {
  isUnemployed: Scalars['Boolean'];
};


export type MutationAddEmploymentEntryArgs = {
  entry: EmploymentEntryInput;
};


export type MutationUpdateEmploymentEntryArgs = {
  entry: EmploymentEntryInput;
  entryId: Scalars['ID'];
};


export type MutationRemoveEmploymentEntryArgs = {
  entryId: Scalars['ID'];
};


export type MutationRewriteSoftSkillsArgs = {
  skills: Array<Scalars['ID']>;
};


export type MutationRewriteHardSkillsArgs = {
  skills: Array<Scalars['ID']>;
};


export type MutationRewriteOtherSkillsArgs = {
  skills: Array<Scalars['String']>;
};


export type MutationUpsertRegionArgs = {
  region: RegionInput;
};


export type MutationRemoveRegionArgs = {
  code: Scalars['String'];
};


export type MutationUpdateCountryArgs = {
  country: CountryInput;
  id: Scalars['ID'];
};


export type MutationRemoveCountryArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCountryArgs = {
  country: CountryInput;
};


export type MutationUpdateSoftSkillArgs = {
  skill: SkillInput;
  id: Scalars['ID'];
};


export type MutationRemoveSoftSkillArgs = {
  id: Scalars['ID'];
};


export type MutationCreateSoftSkillArgs = {
  skill: SkillInput;
};


export type MutationUpdateHardSkillArgs = {
  skill: SkillInput;
  id: Scalars['ID'];
};


export type MutationRemoveHardSkillArgs = {
  id: Scalars['ID'];
};


export type MutationCreateHardSkillArgs = {
  skill: SkillInput;
};


export type MutationUpdateMinistryArgs = {
  ministry: MinistryInput;
  id: Scalars['ID'];
};


export type MutationRemoveMinistryArgs = {
  id: Scalars['ID'];
};


export type MutationCreateMinistryArgs = {
  ministry: MinistryInput;
};


export type MutationCreateLanguageArgs = {
  language: LanguageInput;
};


export type MutationUpdateLanguageArgs = {
  id: Scalars['ID'];
  language: LanguageInput;
};


export type MutationRemoveLanguageArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAssessmentQuotientArgs = {
  assessmentQuotient: AssessmentQuotientInput;
};


export type MutationUpdateAssessmentQuotientArgs = {
  assessmentQuotientId: Scalars['ID'];
  assessmentQuotient: AssessmentQuotientInput;
};


export type MutationRemoveAssessmentQuotientArgs = {
  assessmentQuotientId: Scalars['ID'];
};


export type MutationCreateAssessmentQuotientChoiceConclusionArgs = {
  assessmentQuotientChoiceConclusion: AssessmentQuotientChoiceConclusionInput;
};


export type MutationUpdateAssessmentQuotientChoiceConclusionArgs = {
  assessmentQuotientChoiceConclusionId: Scalars['ID'];
  assessmentQuotientChoiceConclusion: AssessmentQuotientChoiceConclusionInput;
};


export type MutationRemoveAssessmentQuotientChoiceConclusionArgs = {
  assessmentQuotientChoiceConclusionId: Scalars['ID'];
};


export type MutationCreateScaleCaptionArgs = {
  scaleCaption: ScaleCaptionInput;
};


export type MutationUpdateScaleCaptionArgs = {
  scaleCaptionId: Scalars['ID'];
  scaleCaption: ScaleCaptionInput;
};


export type MutationRemoveScaleCaptionArgs = {
  scaleCaptionId: Scalars['ID'];
};


export type MutationSubmitHelpRequestArgs = {
  helpRequest: HelpRequestInput;
};


export type MutationAddEducationEntryForUserArgs = {
  userId: Scalars['ID'];
  educationEntry: EducationEntryInput;
};


export type MutationRemoveEducationEntryForUserArgs = {
  userId: Scalars['ID'];
  educationEntryId: Scalars['ID'];
};


export type MutationUpdateEducationEntryForUserArgs = {
  userId: Scalars['ID'];
  educationEntry: EducationEntryInput;
  educationEntryId: Scalars['ID'];
};


export type MutationSetEmploymentStatusForUserArgs = {
  userId: Scalars['ID'];
  isUnemployed: Scalars['Boolean'];
};


export type MutationAddEmploymentEntryForUserArgs = {
  userId: Scalars['ID'];
  entry: EmploymentEntryInput;
};


export type MutationUpdateEmploymentEntryForUserArgs = {
  userId: Scalars['ID'];
  entry: EmploymentEntryInput;
  entryId: Scalars['ID'];
};


export type MutationRemoveEmploymentEntryForUserArgs = {
  userId: Scalars['ID'];
  entryId: Scalars['ID'];
};


export type MutationRewriteSoftSkillsForUserArgs = {
  userId: Scalars['ID'];
  skills: Array<Scalars['ID']>;
};


export type MutationRewriteHardSkillsForUserArgs = {
  userId: Scalars['ID'];
  skills: Array<Scalars['ID']>;
};


export type MutationRewriteOtherSkillsForUserArgs = {
  userId: Scalars['ID'];
  skills: Array<Scalars['String']>;
};


export type MutationUpdatePersonalDetailsForUserArgs = {
  userId: Scalars['ID'];
  personal: UpdatePersonalDetailsInput;
};


export type MutationDisbandGroupArgs = {
  groupId: Scalars['ID'];
};


export type MutationRenameGroupArgs = {
  newName: Scalars['String'];
  groupId: Scalars['ID'];
};


export type MutationCreateGroupArgs = {
  programId: Scalars['ID'];
};


export type MutationAddLearnerToGroupArgs = {
  learnerId: Scalars['ID'];
  groupId: Scalars['ID'];
};


export type MutationCreateEmptyGroupsForIdleTutorsInProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationRemoveLearnerFromGroupArgs = {
  learnerId: Scalars['ID'];
  groupId: Scalars['ID'];
};


export type MutationRemoveGroupArgs = {
  groupId: Scalars['ID'];
};


export type MutationAssignTutorToGroupArgs = {
  userId: Scalars['ID'];
  groupId: Scalars['ID'];
};


export type MutationRemoveTutorFromGroupArgs = {
  groupId: Scalars['ID'];
};


export type MutationBroadcastMessageToAllGroupsInProgramArgs = {
  message: DiscussionMessageInput;
  programId: Scalars['ID'];
};


export type MutationUpdateDiscussionForGroupsArgs = {
  discussion: UpdateDiscussionForGroupsInput;
  discussionId: Scalars['ID'];
};


export type MutationCreateTopicDiscussionForGroupsArgs = {
  discussion: DiscussionForGroupsInput;
};


export type MutationRemoveDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type MutationAddMessageToDiscussionArgs = {
  message: DiscussionMessageInput;
  discussionId: Scalars['ID'];
};


export type MutationReplyToDiscussionMessageArgs = {
  message: DiscussionMessageInput;
  parentId: Scalars['ID'];
};


export type MutationUpdateMessageInDiscussionArgs = {
  message: UpdateDiscussionMessageInput;
  messageId: Scalars['ID'];
};


export type MutationUpdatePinnedStateForDiscussionMessageArgs = {
  isPinned: Scalars['Boolean'];
  messageId: Scalars['ID'];
};


export type MutationRemoveMessageFromDiscussionArgs = {
  messageId: Scalars['ID'];
};


export type MutationUpvoteDiscussionMessageArgs = {
  messageId: Scalars['ID'];
};


export type MutationDownvoteDiscussionMessageArgs = {
  messageId: Scalars['ID'];
};


export type MutationMarkDiscussionAsActiveArgs = {
  discussionId: Scalars['ID'];
};


export type MutationCreateMissingContentDiscussionsForProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationRepostMessageToDiscussionsArgs = {
  discussionsIds: Array<Scalars['ID']>;
  messageId: Scalars['ID'];
};


export type MutationBroadcastMessageToGroupsArgs = {
  toGroups: Array<Scalars['ID']>;
  message: DiscussionMessageInput;
};


export type MutationSetupGroupingForProgramArgs = {
  setup: GroupingSetupInput;
  programId: Scalars['ID'];
};


export type MutationRemoveGroupingForProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationAddTutorsToGroupingSetupArgs = {
  tutors: Array<Scalars['ID']>;
  programId: Scalars['ID'];
};


export type MutationRemoveTutorsFromProgramGroupingPreferencesArgs = {
  disbandGroups?: Maybe<Scalars['Boolean']>;
  byTutorsIds?: Maybe<Array<Scalars['ID']>>;
  byTutorsEmails?: Maybe<Array<Scalars['String']>>;
  programId: Scalars['ID'];
};


export type MutationInviteUsersToEnrollProgramArgs = {
  invitations: Array<UserInvitationInput>;
  programId: Scalars['ID'];
};


export type MutationPokeProgramInvitationsArgs = {
  invitations: Array<UserInvitationInput>;
  programId: Scalars['ID'];
};


export type MutationCreateQuizArgs = {
  quiz: QuizInput;
};


export type MutationUpdateQuizArgs = {
  id: Scalars['ID'];
  quiz: QuizInput;
};


export type MutationRemoveQuizArgs = {
  id: Scalars['ID'];
};


export type MutationAddQuizQuestionArgs = {
  quiz: Scalars['ID'];
  quizQuestion: QuizQuestionInput;
};


export type MutationRemoveQuizQuestionArgs = {
  quiz: Scalars['ID'];
  quizQuestionId: Scalars['ID'];
};


export type MutationUpdateQuizQuestionArgs = {
  quiz: Scalars['ID'];
  quizQuestion: QuizQuestionInput;
  quizQuestionId: Scalars['ID'];
};


export type MutationSubmitQuizAttemptArgs = {
  quizAttempt: QuizAttemptInput;
  programId: Scalars['ID'];
  moduleSectiondId: Scalars['ID'];
  quizId: Scalars['ID'];
};


export type MutationSubmitInVideoQuizAttemptArgs = {
  quizAttempt: QuizAttemptInput;
  programId: Scalars['ID'];
  moduleSectiondId: Scalars['ID'];
  inVideoQuizId: Scalars['ID'];
};


export type MutationTestEarnedRewardNotificationArgs = {
  meta: TestEarnedRewardMetaInput;
  earnedReward: TestEarnedRewardInput;
};


export type MutationSubmitGroupProjectArgs = {
  submission: GroupProjectSubmissionInput;
};


export type MutationSubmitGroupProjectReviewArgs = {
  groupProjectReviewInput: GroupProjectReviewInput;
};


export type MutationUpdateGroupProjectReviewArgs = {
  feedbackText: Scalars['String'];
  groupProjectReviewId: Scalars['ID'];
};


export type MutationCreateGalleryFolderArgs = {
  galleryFolder: GalleryFolderInput;
};


export type MutationUpdateGalleryFolderArgs = {
  id: Scalars['ID'];
  galleryFolder: GalleryFolderInput;
};


export type MutationRemoveGalleryFolderArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveImageFromGalleryArgs = {
  id: Scalars['ID'];
};


export type MutationCreateModuleArgs = {
  module: ModuleInput;
};


export type MutationUpdateModuleArgs = {
  id: Scalars['ID'];
  module: ModuleInput;
};


export type MutationRemoveModuleArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateModuleOrderArgs = {
  order: Scalars['Long'];
  moduleId: Scalars['ID'];
};


export type MutationUpdateSectionOrderArgs = {
  order: Scalars['Long'];
  sectionId: Scalars['ID'];
  moduleId: Scalars['ID'];
};


export type MutationRemoveSectionFromModuleArgs = {
  sectionId: Scalars['ID'];
  moduleId: Scalars['ID'];
};


export type MutationUpdateSectionArgs = {
  section: UpdateSectionInput;
  sectionId: Scalars['ID'];
  moduleId: Scalars['ID'];
};


export type MutationAddDiscussionSectionToModuleArgs = {
  discussion: ModuleDiscussionInput;
  section: SectionInput;
  moduleId: Scalars['ID'];
};


export type MutationAddLessonSectionToModuleArgs = {
  lessonId: Scalars['ID'];
  section: SectionInput;
  moduleId: Scalars['ID'];
};


export type MutationAddAssessmentSectionToModuleArgs = {
  assessmentId: Scalars['ID'];
  section: SectionInput;
  moduleId: Scalars['ID'];
};


export type MutationAddAssignmentSectionToModuleArgs = {
  assignmentId: Scalars['ID'];
  section: SectionInput;
  moduleId: Scalars['ID'];
};


export type MutationAddQuizSectionToModuleArgs = {
  quizId: Scalars['ID'];
  section: SectionInput;
  moduleId: Scalars['ID'];
};


export type MutationAddQuizAssessmentSectionToModuleArgs = {
  quizAssessmentId: Scalars['ID'];
  section: SectionInput;
  moduleId: Scalars['ID'];
};


export type MutationAddMaintainersSectionToModuleArgs = {
  programId: Scalars['ID'];
  section: SectionInput;
  moduleId: Scalars['ID'];
};


export type MutationAddAdditionalReadingLinkToModuleSectionArgs = {
  title?: Maybe<TranslationsInput>;
  link: Scalars['String'];
  moduleSectionId: Scalars['ID'];
  moduleId: Scalars['ID'];
};


export type MutationRemoveAdditionalReadingLinkFromModuleSectionArgs = {
  linkId: Scalars['ID'];
  moduleSectionId: Scalars['ID'];
  moduleId: Scalars['ID'];
};


export type MutationCreateArticleLessonArgs = {
  articleLesson: ArticleLessonInput;
};


export type MutationUpdateArticleLessonArgs = {
  id: Scalars['ID'];
  articleLesson: ArticleLessonInput;
};


export type MutationRemoveArticleLessonArgs = {
  id: Scalars['ID'];
};


export type MutationCreateVideoLessonArgs = {
  videoLesson: VideoLessonInput;
};


export type MutationUpdateVideoLessonArgs = {
  id: Scalars['ID'];
  videoLesson: VideoLessonInput;
};


export type MutationRemoveVideoLessonArgs = {
  id: Scalars['ID'];
};


export type MutationAddVideoOverlayArgs = {
  videoLessonId: Scalars['ID'];
  videoOverlay: VideoOverlayInput;
};


export type MutationRemoveVideoOverlayArgs = {
  videoLessonId: Scalars['ID'];
  videoOverlayId: Scalars['ID'];
};


export type MutationUpdateVideoOverlayArgs = {
  videoLessonId: Scalars['ID'];
  videoOverlay: VideoOverlayInput;
  videoOverlayId: Scalars['ID'];
};


export type MutationAddVideoSubtitleArgs = {
  videoLessonId: Scalars['ID'];
  videoSubtitle: VideoSubtitleInput;
};


export type MutationRemoveVideoSubtitleArgs = {
  videoLessonId: Scalars['ID'];
  videoSubtitleId: Scalars['ID'];
};


export type MutationUpdateVideoSubtitleArgs = {
  videoLessonId: Scalars['ID'];
  videoSubtitle: VideoSubtitleInput;
  videoSubtitleId: Scalars['ID'];
};


export type MutationAddVideoGlossaryArgs = {
  videoLessonId: Scalars['ID'];
  videoGlossary: VideoGlossaryInput;
};


export type MutationRemoveVideoGlossaryArgs = {
  videoLessonId: Scalars['ID'];
  videoGlossaryId: Scalars['ID'];
};


export type MutationSubmitPeerReviewForModuleAssignmentArgs = {
  assignmentPeerReview: AssignmentPeerReviewInput;
};


export type MutationSubmitAssignmentSubmissionReviewArgs = {
  assignmentSubmissionReviewInput: AssignmentSubmissionReviewInput;
};


export type MutationUpdateAssignmentSubmissionReviewArgs = {
  feedbackText: Scalars['String'];
  assignmentSubmissionReviewId: Scalars['ID'];
};


export type MutationSubmitAssignmentArgs = {
  programId: Scalars['ID'];
  assignmentSubmission: AssignmentSubmissionInput;
};


export type MutationFinalizeModuleAssignmentSubmissionArgs = {
  assignmentSubmissionId: Scalars['ID'];
};


export type MutationCreateQuizAssessmentArgs = {
  quiz: QuizAssessmentInput;
};


export type MutationUpdateQuizAssessmentArgs = {
  id: Scalars['ID'];
  quiz: QuizAssessmentUpdateInput;
};


export type MutationRemoveQuizAssessmentArgs = {
  id: Scalars['ID'];
};


export type MutationAddQuizAssessmentQuestionArgs = {
  quiz: Scalars['ID'];
  question: QuizAssessmentQuestionInput;
};


export type MutationRemoveQuizAssessmentQuestionArgs = {
  quiz: Scalars['ID'];
  questionId: Scalars['ID'];
};


export type MutationUpdateQuizAssessmentQuestionArgs = {
  quiz: Scalars['ID'];
  question: QuizAssessmentQuestionInput;
  questionId: Scalars['ID'];
};


export type MutationAddQuizAssessmentAspectArgs = {
  quiz: Scalars['ID'];
  aspect: QuizAssessmentAspectInput;
};


export type MutationUpdateQuizAssessmentAspectArgs = {
  quiz: Scalars['ID'];
  aspect: QuizAssessmentAspectInput;
  aspectId: Scalars['ID'];
};


export type MutationRemoveQuizAssessmentAspectArgs = {
  quiz: Scalars['ID'];
  aspectId: Scalars['ID'];
};


export type MutationCreateCommitmentLessonArgs = {
  commitmentLesson: CommitmentLessonInput;
};


export type MutationUpdateCommitmentLessonArgs = {
  id: Scalars['ID'];
  commitmentLesson: CommitmentLessonInput;
};


export type MutationRemoveCommitmentLessonArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePhaseArgs = {
  phase: PhaseInput;
};


export type MutationUpdatePhaseArgs = {
  id: Scalars['ID'];
  phase: PhaseInput;
};


export type MutationRemovePhaseArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateProgramArgs = {
  program: ProgramInput;
  id: Scalars['ID'];
};


export type MutationRemoveProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationTerminateProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationPublishProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationUpPublishProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationCreateProgramArgs = {
  program: ProgramInput;
};


export type MutationAddProgramWeekArgs = {
  program: Scalars['ID'];
  programWeek: ProgramWeekInput;
};


export type MutationRemoveProgramWeekArgs = {
  program: Scalars['ID'];
  programWeekId: Scalars['ID'];
};


export type MutationUpdateProgramWeekArgs = {
  program: Scalars['ID'];
  programWeek: ProgramWeekInput;
  programWeekId: Scalars['ID'];
};


export type MutationOpenProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationCloneProgramContentArgs = {
  extra?: Maybe<CloneProgramContentExtraInput>;
  programId: Scalars['ID'];
};


export type MutationCloseProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationEnrollToProgramArgs = {
  programLicence?: Maybe<Scalars['String']>;
  programId: Scalars['ID'];
};


export type MutationAddModuleToProgramWeekArgs = {
  programId: Scalars['ID'];
  moduleId: Scalars['ID'];
  programWeekId: Scalars['ID'];
};


export type MutationRemoveModuleFromProgramWeekArgs = {
  programId: Scalars['ID'];
  moduleId: Scalars['ID'];
  programWeekId: Scalars['ID'];
};


export type MutationCompleteModuleSectionArgs = {
  weekId: Scalars['ID'];
  sectionId: Scalars['ID'];
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type MutationMarkModuleSectionAsVisitedArgs = {
  weekId: Scalars['ID'];
  sectionId: Scalars['ID'];
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type MutationMarkProgramModuleAsVisitedArgs = {
  weekId: Scalars['ID'];
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type MutationMarkProgramWeekAsVisitedArgs = {
  weekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type MutationAddLabelToProgramArgs = {
  label: ProgramLabelInput;
  programId: Scalars['ID'];
};


export type MutationRemoveLabelFromProgramArgs = {
  programId: Scalars['ID'];
  programLabelId: Scalars['ID'];
};


export type MutationUpdateLabelInProgramArgs = {
  programId: Scalars['ID'];
  programLabel: ProgramLabelInput;
  programLabelId: Scalars['ID'];
};


export type MutationUpdateAutomaticGroupingSettingForProgramArgs = {
  programId: Scalars['ID'];
  enable: Scalars['Boolean'];
};


export type MutationUpdateIsOnlineOnlySettingForProgramArgs = {
  programId: Scalars['ID'];
  enable: Scalars['Boolean'];
};


export type MutationAddManagersToProgramArgs = {
  usersIds: Array<Scalars['ID']>;
  programId: Scalars['ID'];
};


export type MutationRemoveManagersFromProgramArgs = {
  usersIds: Array<Scalars['ID']>;
  programId: Scalars['ID'];
};


export type MutationCreateCategoryArgs = {
  category: CategoryInput;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'];
  category: CategoryInput;
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationSubmitModuleSatisfactionFeedbackArgs = {
  feedback: SatisfactionFeedbackInput;
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type MutationCreateInVideoQuizArgs = {
  inVideoQuiz: InVideoQuizInput;
};


export type MutationUpdateInVideoQuizArgs = {
  id: Scalars['ID'];
  inVideoQuiz: InVideoQuizInput;
};


export type MutationRemoveInVideoQuizArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAssessmentArgs = {
  assessment: CreateAssessmentInput;
};


export type MutationUpdateAssessmentDetailsArgs = {
  assessment: UpdateAssessmentDetailsInput;
  assessmentId: Scalars['ID'];
};


export type MutationRemoveAssessmentArgs = {
  assessmentId: Scalars['ID'];
};


export type MutationAddSectionToAssessmentArgs = {
  assessmentSection: AssessmentSectionInput;
  assessmentId: Scalars['ID'];
};


export type MutationUpdateSectionInAssessmentArgs = {
  assessmentSection: AssessmentSectionInput;
  assessmentSectionId: Scalars['ID'];
  assessmentId: Scalars['ID'];
};


export type MutationRemoveSectionInAssessmentArgs = {
  assessmentSectionId: Scalars['ID'];
  assessmentId: Scalars['ID'];
};


export type MutationAddAdditionalQuestionToAssessmentArgs = {
  additionalAssessmentQuestion: AdditionalAssessmentQuestionInput;
  assessmentId: Scalars['ID'];
};


export type MutationUpdateAdditionalQuestionInAssessmentArgs = {
  additionalAssessmentQuestion: AdditionalAssessmentQuestionInput;
  additionalAssessmentQuestionId: Scalars['ID'];
  assessmentId: Scalars['ID'];
};


export type MutationRemoveAdditionalQuestionInAssessmentArgs = {
  additionalAssessmentQuestionId: Scalars['ID'];
  assessmentId: Scalars['ID'];
};


export type MutationSubmitAssessmentArgs = {
  programId: Scalars['ID'];
  assessmentSubmission: AssessmentSubmissionInput;
};


export type MutationCreateGroupProjectArgs = {
  groupProject: GroupProjectInput;
};


export type MutationUpdateGroupProjectArgs = {
  groupProjectId: Scalars['ID'];
  groupProject: GroupProjectInput;
};


export type MutationRemoveGroupProjectArgs = {
  groupProjectId: Scalars['ID'];
};


export type MutationUpdateModuleAssignmentArgs = {
  moduleAssignment: ModuleAssignmentInput;
  id: Scalars['ID'];
};


export type MutationRemoveModuleAssignmentArgs = {
  id: Scalars['ID'];
};


export type MutationCreateModuleAssignmentArgs = {
  moduleAssignment: CreateModuleAssignmentInput;
};


export type MutationAddModuleAssignmentSectionArgs = {
  moduleAssignment: Scalars['ID'];
  moduleAssignmentSection: ModuleAssignmentSectionInput;
};


export type MutationRemoveModuleAssignmentSectionArgs = {
  moduleAssignment: Scalars['ID'];
  moduleAssignmentSectionId: Scalars['ID'];
};


export type MutationUpdateModuleAssignmentSectionArgs = {
  moduleAssignment: Scalars['ID'];
  moduleAssignmentSection: ModuleAssignmentSectionInput;
  moduleAssignmentSectionId: Scalars['ID'];
};


export type MutationAttachPeerReviewAssessmentToModuleAssignmentArgs = {
  peerReviewAssessmentId: Scalars['ID'];
  moduleAssignmentId: Scalars['ID'];
};


export type MutationCreateProgramMaintainerArgs = {
  programMaintainer: ProgramMaintainerInput;
};


export type MutationUpdateProgramMaintainerArgs = {
  programMaintainerId: Scalars['ID'];
  programMaintainer: ProgramMaintainerInput;
};


export type MutationRemoveProgramMaintainerArgs = {
  programMaintainerId: Scalars['ID'];
};


export type MutationAddMaintainerForProgramArgs = {
  programId: Scalars['ID'];
  maintainerId: Scalars['ID'];
};


export type MutationRemoveMaintainerFromProgramArgs = {
  programId: Scalars['ID'];
  maintainerId: Scalars['ID'];
};


export type MutationRemoveAllMaintainersFromProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationSubmitQuizAssessmentAttemptArgs = {
  attempt: QuizAssessmentAttemptInput;
  programId: Scalars['ID'];
  moduleSectiondId: Scalars['ID'];
  quizAssessmentId: Scalars['ID'];
};


export type MutationCreateProgramLicenceArgs = {
  programLicenceInput: ProgramLicenceInput;
};


export type MutationUpdateProgramLicenceArgs = {
  programLicenceInput: UpdateProgramLicenceInput;
  programLicenceId: Scalars['ID'];
};


export type MutationRemoveProgramLicenceArgs = {
  programLicenceId: Scalars['ID'];
};


export type MutationRegisterUserArgs = {
  opts?: Maybe<RegistrationOptsInput>;
  user: CreateUserInput;
};


export type MutationResendPrimaryEmailConfirmationArgs = {
  opts?: Maybe<PrimaryEmailOptsInput>;
};


export type MutationConfirmPrimaryEmailArgs = {
  acknowledgementToken: Scalars['String'];
};


export type MutationMobileLoginArgs = {
  credentials: CredentialsInput;
};


export type MutationLoginArgs = {
  credentials: CredentialsInput;
};


export type MutationSubstitutePasswordArgs = {
  substitution: PasswordSubstitutionInput;
};


export type MutationStartEmailSubstitutionArgs = {
  substitution: EmailSubstitutionInput;
};


export type MutationFinishEmailSubstitutionArgs = {
  acknowledgementToken: Scalars['String'];
};


export type MutationStartResetPasswordArgs = {
  recover: StartResetPasswordInput;
};


export type MutationFinishResetPasswordArgs = {
  recover: FinishResetPasswordInput;
};


export type MutationStartAttachSecondaryEmailArgs = {
  secondaryEmailInput: SecondaryEmailInput;
};


export type MutationFinishAttachSecondaryEmailArgs = {
  acknowledgementToken: Scalars['String'];
};


export type MutationLeavePlatformFeedbackArgs = {
  feedback: PlatformFeedbackInput;
};


export type MutationTestEmailNotificationArgs = {
  testInput: TestEmailNotificationInput;
};


export type MutationTestPlatformNotificationArgs = {
  testInput: TestPlatformNotificationInput;
};


export type MutationFetchAndViewNotificationsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  dateRange?: Maybe<DateRangeInput>;
};


export type MutationMarkNotificationAsReadArgs = {
  id: Scalars['ID'];
};


export type MutationMarkNotificationAsViewedArgs = {
  id: Scalars['ID'];
};


export type MutationMarkAllNotificationsAsReadArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  dateRange?: Maybe<DateRangeInput>;
};


export type MutationGenerateTestPlatformNotificationsArgs = {
  length?: Maybe<Scalars['Int']>;
  forUser: Scalars['ID'];
};


export type MutationSetNotificationRedirectArgs = {
  redirect: NotificationRedirectInput;
};


export type MutationRemoveNotificationRedirectArgs = {
  redirectId: Scalars['ID'];
};


export type MutationMarkChatMessagesAsReadArgs = {
  beforeDateTime?: Maybe<Scalars['Date']>;
  channelId: Scalars['ID'];
};


export type MutationSetTypingInChatChannelArgs = {
  typing: TypingInChatChannelInput;
};


export type MutationSendMessageToChatChannelArgs = {
  membersIds?: Maybe<Array<Scalars['ID']>>;
  channelClue: Scalars['String'];
  message: Scalars['String'];
};


export type MutationSendMessageToChatChannelsArgs = {
  channelIds: Array<Scalars['ID']>;
  message: Scalars['String'];
};


export type MutationProvideChatChannelForMeAndMembersArgs = {
  membersIds: Array<Scalars['ID']>;
};


export type MutationSendDirectChatMessageToMultipleContactsArgs = {
  message: Scalars['String'];
  membersIds: Array<Scalars['ID']>;
};


export type MutationAssureIntegrityOfUsersArgs = {
  source: UserSource;
};


export type MutationUpdatePlatformVarArgs = {
  platformVar: UpdatePlatformVarInput;
};


export type MutationCleanupSystemFromUserArgs = {
  emails: Array<Scalars['String']>;
};


export type MutationCleanupPublicEvidencesOfUsersArgs = {
  emails: Array<Scalars['String']>;
};


export type MutationUpdateIsTestFlagForUsersArgs = {
  isTest: Scalars['Boolean'];
  emails: Array<Scalars['String']>;
};


export type MutationForceResetPasswordForUserArgs = {
  reset: ResetPasswordInput;
  email: Scalars['String'];
};


export type MutationCleanupProgressForProgramArgs = {
  programId: Scalars['ID'];
};

export type PaymentInput = {
  amount: Scalars['Float'];
  program: Scalars['ID'];
  fullName: Scalars['String'];
  email: Scalars['String'];
  cardNumber: Scalars['String'];
  cardValidTill: Scalars['Date'];
  cardCvc: Scalars['String'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float'];
  user: User;
  program: Program;
  fullName: Scalars['String'];
  email: Scalars['String'];
  cardNumber: Scalars['String'];
  cardCvc: Scalars['String'];
  cardValidTill: Scalars['Date'];
  method: PaymentMethod;
  createdAt: Scalars['Date'];
};

export enum PaymentMethod {
  Card = 'card'
}

export type UpdateUserInput = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  whatsAppNumber?: Maybe<Scalars['String']>;
};

export type UpdateNotificationsSettingsInput = {
  email?: Maybe<Array<NotificationsGroup>>;
  push?: Maybe<Array<NotificationsGroup>>;
  sms?: Maybe<Array<NotificationsGroup>>;
  whatsApp?: Maybe<Array<NotificationsGroup>>;
};

export type UpdatePersonalDetailsInput = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  phoneNumber?: Maybe<Scalars['String']>;
  whatsAppNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  country?: Maybe<Scalars['ID']>;
  region?: Maybe<Scalars['ID']>;
  nationality?: Maybe<Scalars['ID']>;
};

export type EducationEntryInput = {
  institution: Scalars['String'];
  qualification: EducationQualification;
  major: Scalars['String'];
  startedAt: Scalars['String'];
  finishedAt?: Maybe<Scalars['String']>;
  currentlyStudyHere?: Maybe<Scalars['Boolean']>;
};

export type EmploymentEntryInput = {
  organisation?: Maybe<Scalars['String']>;
  ministry?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  position: Scalars['String'];
  employmentType?: Maybe<EmploymentType>;
  startedAt: Scalars['Date'];
  finishedAt?: Maybe<Scalars['Date']>;
  currentlyWorkHere: Scalars['Boolean'];
};

export type RegionInput = {
  name: TranslationsInput;
  code: Scalars['String'];
  countryCode: Scalars['String'];
  latlong: Array<Scalars['Float']>;
};

export type TranslationsInput = {
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  ar?: Maybe<Scalars['String']>;
};

export type CountryInput = {
  name: TranslationsInput;
  code: Scalars['String'];
  latlong: Array<Scalars['Float']>;
};

export type SkillInput = {
  name: TranslationsInput;
};

export type MinistryInput = {
  name: TranslationsInput;
};

export type LanguageInput = {
  code: SupportedLanguage;
  name: TranslationsInput;
};

export type AssessmentQuotientInput = {
  title: TranslationsInput;
  key: Scalars['String'];
  description: TranslationsInput;
};

export type AssessmentQuotientChoiceConclusionInput = {
  conclusion: TranslationsInput;
  quotients: Array<Scalars['ID']>;
};

export type ScaleCaptionInput = {
  slots: Array<ScaleSlotInput>;
};

export type ScaleSlotInput = {
  title: TranslationsInput;
  weight: Scalars['Int'];
};

export type HelpRequestInput = {
  message: Scalars['String'];
  subject: Scalars['String'];
};

export type DiscussionMessageInput = {
  text: Scalars['String'];
  isPinned?: Maybe<Scalars['Boolean']>;
};

export type BroadcastResult = {
  __typename?: 'BroadcastResult';
  imprint: Scalars['String'];
  totalGroupsBroadcast: Scalars['Int'];
};

export type UpdateDiscussionForGroupsInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  alsoInGroups?: Maybe<Array<Scalars['ID']>>;
};

export type DiscussionForGroupsInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  inGroup: Scalars['ID'];
  alsoInGroups?: Maybe<Array<Scalars['ID']>>;
  bindToWeek?: Maybe<Scalars['ID']>;
};

export type UpdateDiscussionMessageInput = {
  text: Scalars['String'];
};

export type GroupingSetupInput = {
  mechanism: GroupingMechanismType;
  tutors?: Maybe<Array<Scalars['ID']>>;
};

export type RemoveTutorsFromGroupingResult = {
  __typename?: 'RemoveTutorsFromGroupingResult';
  disbandedGroupsIds: Array<Scalars['ID']>;
  reallocatedLearnersIds: Array<Scalars['ID']>;
  totalDisbandedGroups: Scalars['Int'];
  totalReallocatedLearners: Scalars['Int'];
};

export type UserInvitationInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};

export type ProgramInvitationPokeResult = {
  __typename?: 'ProgramInvitationPokeResult';
  withAccounts: Array<Scalars['String']>;
  totalWithAccounts: Scalars['Int'];
  totalAlreadyInvited: Scalars['Int'];
  alreadyInvited: Array<Scalars['String']>;
  totalCanBeInvited: Scalars['Int'];
  canBeInvited: Array<Scalars['String']>;
  totalProblems: Scalars['Int'];
  isOk: Scalars['Boolean'];
};

export type QuizInput = {
  title: TranslationsInput;
  description: TranslationsInput;
  feedbackText: TranslationsInput;
  quizType?: Maybe<QuizType>;
  passPercent?: Maybe<Scalars['Int']>;
};

export type QuizQuestionInput = {
  answerOptions?: Maybe<Array<QuizQuestionAnswerOptionInput>>;
  questionType: QuestionType;
  questionText: TranslationsInput;
  weight?: Maybe<Scalars['Float']>;
};

export type QuizQuestionAnswerOptionInput = {
  text: TranslationsInput;
  isCorrect?: Maybe<Scalars['Boolean']>;
  weight?: Maybe<Scalars['Float']>;
};

export type QuizAttemptInput = {
  answers: Array<QuizAnswerAttemptInput>;
};

export type QuizAnswerAttemptInput = {
  question: Scalars['ID'];
  pickedOptions?: Maybe<Array<Scalars['ID']>>;
  answeredText?: Maybe<Scalars['String']>;
};

export type TestEarnedRewardMetaInput = {
  toUser: Scalars['ID'];
  useLanguage?: Maybe<SupportedLanguage>;
};

export type TestEarnedRewardInput = {
  effortName: EffortName;
  rewardSize: Scalars['Int'];
};

export type GroupProjectSubmissionInput = {
  project: Scalars['ID'];
  message: Scalars['String'];
  group: Scalars['ID'];
};

export type GroupProjectReviewInput = {
  groupProjectSubmission: Scalars['ID'];
  feedbackText: Scalars['String'];
};

export type GalleryFolderInput = {
  title: TranslationsInput;
};

export type ModuleInput = {
  name: TranslationsInput;
  description: TranslationsInput;
  requiresFeedback?: Maybe<Scalars['Boolean']>;
};

export type UpdateSectionInput = {
  title?: Maybe<TranslationsInput>;
  description?: Maybe<TranslationsInput>;
  duration?: Maybe<Scalars['Long']>;
  type: ModuleSectionType;
};

export type ModuleDiscussionInput = {
  subject: TranslationsInput;
};

export type SectionInput = {
  title: TranslationsInput;
  description?: Maybe<TranslationsInput>;
  type: ModuleSectionType;
  duration: Scalars['Long'];
};

export type ArticleLessonInput = {
  story: TranslationsInput;
};

export type VideoLessonInput = {
  videoSources: Array<VideoSourceInput>;
  isExternal?: Maybe<Scalars['Boolean']>;
  subtitles?: Maybe<Array<VideoSubtitleInput>>;
  transcript?: Maybe<TranslationsInput>;
  overlays?: Maybe<Array<VideoOverlayInput>>;
  glossaries?: Maybe<Array<VideoGlossaryInput>>;
};

export type VideoSourceInput = {
  link: TranslationsInput;
  resolution: Scalars['Int'];
  label: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type VideoSubtitleInput = {
  language: SubtitleLanguage;
  file: Scalars['String'];
};

export type VideoOverlayInput = {
  timepointStart: Scalars['TimePoint'];
  timepointEnd: Scalars['TimePoint'];
  jsStyle?: Maybe<Scalars['Any']>;
  jsVariables: Scalars['Any'];
  type: VideoOverlayType;
  title: TranslationsInput;
  items?: Maybe<Array<TranslationsInput>>;
};

export type VideoGlossaryInput = {
  timepoint: Scalars['TimePoint'];
  title: TranslationsInput;
  description?: Maybe<TranslationsInput>;
};

export type AssignmentPeerReviewInput = {
  assignmentSubmission: Scalars['ID'];
  feedbackText: Scalars['String'];
  assessment?: Maybe<AssessmentSubmissionInput>;
};

export type AssessmentSubmissionInput = {
  sections: Array<AssessmentSectionSubmissionInput>;
  assessment: Scalars['ID'];
  additionalAnswers?: Maybe<Array<AssessmentAdditionalAnswerSubmissionInput>>;
};

export type AssessmentSectionSubmissionInput = {
  section: Scalars['ID'];
  aspects: Array<AssessmentAspectSubmissionInput>;
};

export type AssessmentAspectSubmissionInput = {
  aspect: Scalars['ID'];
  pickedWeight: Scalars['Long'];
  quotient: Scalars['ID'];
};

export type AssessmentAdditionalAnswerSubmissionInput = {
  additionalQuestion: Scalars['ID'];
  answerText: Scalars['String'];
};

export type AssignmentSubmissionReviewInput = {
  assignmentSubmission: Scalars['ID'];
  feedbackText: Scalars['String'];
};

export type AssignmentSubmissionInput = {
  assignment: Scalars['ID'];
  sections: Array<AssignmentSectionSubmissionInput>;
};

export type AssignmentSectionSubmissionInput = {
  section: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
};

export type QuizAssessmentInput = {
  title: TranslationsInput;
  description: TranslationsInput;
  feedbackText: TranslationsInput;
  aspects: Array<QuizAssessmentAspectInput>;
};

export type QuizAssessmentAspectInput = {
  title: TranslationsInput;
  description: TranslationsInput;
  initialValue?: Maybe<Scalars['Float']>;
  maxValue: Scalars['Float'];
};

export type QuizAssessmentUpdateInput = {
  title: TranslationsInput;
  description: TranslationsInput;
  feedbackText: TranslationsInput;
};

export type QuizAssessmentQuestionInput = {
  answerOptions: Array<QuizAssessmentAnswerOptionInput>;
  questionType: QuestionType;
  questionText: TranslationsInput;
};

export type QuizAssessmentAnswerOptionInput = {
  text: TranslationsInput;
  affects: Array<QuizAssessmentAnswerOptionAffectsInput>;
};

export type QuizAssessmentAnswerOptionAffectsInput = {
  aspect: Scalars['ID'];
  by?: Maybe<Scalars['Float']>;
  operation?: Maybe<QuizAssessmentMathOperations>;
};

export enum QuizAssessmentMathOperations {
  Add = 'Add',
  Subtract = 'Subtract',
  Multiply = 'Multiply',
  Divide = 'Divide'
}

export type CommitmentLessonInput = {
  description: TranslationsInput;
  itemsTitle: TranslationsInput;
  items: Array<TranslationsInput>;
};

export type PhaseInput = {
  title: TranslationsInput;
};

export type ProgramInput = {
  category: Scalars['ID'];
  startsAt?: Maybe<Scalars['Date']>;
  source: UserSource;
  type: ProgramType;
  title: TranslationsInput;
  description?: Maybe<TranslationsInput>;
  shortDescription?: Maybe<TranslationsInput>;
  videoUrl?: Maybe<Scalars['String']>;
  syllabusUrl?: Maybe<Scalars['String']>;
  duration: Scalars['Long'];
  licenceRequirement?: Maybe<ProgramLicenceRequirementInput>;
};

export type ProgramLicenceRequirementInput = {
  isRequired: Scalars['Boolean'];
  licences: Array<Scalars['ID']>;
};

export type ProgramWeekInput = {
  order: Scalars['Long'];
  phase: Scalars['ID'];
  title: TranslationsInput;
  description: TranslationsInput;
  duration: Scalars['Long'];
};

export type CloneProgramContentExtraInput = {
  preserveWeeks: Scalars['Boolean'];
};

export type ProgramLabelInput = {
  icon: Scalars['ID'];
  title: TranslationsInput;
};

export type CategoryInput = {
  title: TranslationsInput;
  description: TranslationsInput;
};

export type SatisfactionFeedbackInput = {
  stars: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
};

export type InVideoQuizInput = {
  questions: Array<QuizQuestionInput>;
  successText: TranslationsInput;
  failureText: TranslationsInput;
  tooltipText: TranslationsInput;
  attachToTimepoint: Scalars['TimePoint'];
  rewindToTimepoint: Scalars['TimePoint'];
  videoLesson: Scalars['ID'];
  quizType?: Maybe<QuizType>;
  passPercent?: Maybe<Scalars['Int']>;
};

export type CreateAssessmentInput = {
  title: TranslationsInput;
  description?: Maybe<TranslationsInput>;
  sections?: Maybe<Array<AssessmentSectionInput>>;
  additionalQuestions?: Maybe<Array<AdditionalAssessmentQuestionInput>>;
};

export type AssessmentSectionInput = {
  title: TranslationsInput;
  description?: Maybe<TranslationsInput>;
  subject: TranslationsInput;
  aspects: Array<AssessmentAspectInput>;
  scaleCaption: Scalars['ID'];
};

export type AssessmentAspectInput = {
  title: TranslationsInput;
  quotient: Scalars['ID'];
};

export type AdditionalAssessmentQuestionInput = {
  title: TranslationsInput;
};

export type UpdateAssessmentDetailsInput = {
  title?: Maybe<TranslationsInput>;
  description?: Maybe<TranslationsInput>;
};

export type GroupProjectInput = {
  title: TranslationsInput;
  description?: Maybe<TranslationsInput>;
  dueDate: Scalars['Date'];
  program: Scalars['ID'];
};

export type ModuleAssignmentInput = {
  dueDate?: Maybe<Scalars['Date']>;
  title: TranslationsInput;
  description?: Maybe<TranslationsInput>;
};

export type CreateModuleAssignmentInput = {
  dueDate?: Maybe<Scalars['Date']>;
  title: TranslationsInput;
  description?: Maybe<TranslationsInput>;
  sections?: Maybe<Array<ModuleAssignmentSectionInput>>;
};

export type ModuleAssignmentSectionInput = {
  title: TranslationsInput;
};

export type ProgramMaintainerInput = {
  user: Scalars['ID'];
  occupation: TranslationsInput;
  bio: TranslationsInput;
};

export type QuizAssessmentAttemptInput = {
  answers: Array<QuizAssessmentAttemptAnswerInput>;
};

export type QuizAssessmentAttemptAnswerInput = {
  question: Scalars['ID'];
  pickedOptions?: Maybe<Array<Scalars['ID']>>;
};

export type ProgramLicenceInput = {
  value: Scalars['String'];
  limit: Scalars['Int'];
};

export type UpdateProgramLicenceInput = {
  value?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type RegistrationOptsInput = {
  enrollProgram: Scalars['ID'];
  programLicence?: Maybe<Scalars['String']>;
};

export type CreateUserInput = {
  role: RegisterUserRole;
  profile: CreateProfileInput;
};

export type CreateProfileInput = {
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  gender?: Maybe<Gender>;
  phoneNumber?: Maybe<Scalars['String']>;
  whatsAppNumber?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  employeeId?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type Session = {
  __typename?: 'Session';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  token: Scalars['String'];
  user: User;
};

export type PrimaryEmailOptsInput = {
  alternativeEmail: Scalars['String'];
};

export type CredentialsInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type PasswordSubstitutionInput = {
  currentPassword: Scalars['String'];
  substitutionPassword: Scalars['String'];
};

export type EmailSubstitutionInput = {
  substitutionEmail: Scalars['String'];
};

export type StartResetPasswordInput = {
  email: Scalars['String'];
};

export type FinishResetPasswordInput = {
  acknowledgementToken: Scalars['String'];
  newPassword: Scalars['String'];
};

export type SecondaryEmailInput = {
  secondaryEmail: Scalars['String'];
};

export type PlatformFeedbackInput = {
  type: PlatformFeedbackType;
  message: Scalars['String'];
};

export type TestEmailNotificationInput = {
  payload: Scalars['JsonString'];
  topic: NotificationTopic;
  email: Scalars['String'];
  language?: Maybe<SupportedLanguage>;
};

/** Notification Topic */
export enum NotificationTopic {
  ToInformAboutUnreadPlatformNotifications = 'ToInformAboutUnreadPlatformNotifications',
  ToRequestPrimaryEmailConfirmation = 'ToRequestPrimaryEmailConfirmation',
  ToFinishRegistration = 'ToFinishRegistration',
  ToResetPassword = 'ToResetPassword',
  ToSubstituteEmail = 'ToSubstituteEmail',
  ToAttachSecondaryEmail = 'ToAttachSecondaryEmail',
  ToSendProgramInstructionsCommon = 'ToSendProgramInstructionsCommon',
  ToSendProgramInstructionsOman = 'ToSendProgramInstructionsOman',
  ToSendProgramInstructions5qs = 'ToSendProgramInstructions5qs',
  ToInformProgramStartedOman = 'ToInformProgramStartedOman',
  ToInformProgramStarted5qs = 'ToInformProgramStarted5qs',
  ToSendWeeklySummary = 'ToSendWeeklySummary',
  ToAskLearnerToStartProgram = 'ToAskLearnerToStartProgram',
  ToAskLearnerToFinalizeWeek = 'ToAskLearnerToFinalizeWeek',
  ToAskLearnerToBeMoreActive = 'ToAskLearnerToBeMoreActive',
  ToAskLearnerAgainToBeMoreActive = 'ToAskLearnerAgainToBeMoreActive',
  ToSendHelpRequest = 'ToSendHelpRequest',
  ToInviteToProgram = 'ToInviteToProgram',
  ToSendWeek1Instruction = 'ToSendWeek1Instruction',
  ToSendWeek2Instruction = 'ToSendWeek2Instruction',
  ToSendWeek3Instruction = 'ToSendWeek3Instruction',
  ToSendWeek4Instruction = 'ToSendWeek4Instruction',
  NewMessage = 'NewMessage',
  NewTask = 'NewTask',
  NewEvent = 'NewEvent',
  NewPostInGroup = 'NewPostInGroup',
  NewMessageReply = 'NewMessageReply',
  NewGroupNotification = 'NewGroupNotification',
  WeekCompleted = 'WeekCompleted',
  CompleteProfileReminder = 'CompleteProfileReminder',
  AssignmentSubmissionReminder = 'AssignmentSubmissionReminder',
  TaskReminder = 'TaskReminder',
  WithinReachOfCompletingWeek = 'WithinReachOfCompletingWeek',
  ThreeDaysBeforeAssignmentDueDate = 'ThreeDaysBeforeAssignmentDueDate',
  JoinYourGroupReminder = 'JoinYourGroupReminder',
  CompleteYourPeerReview = 'CompleteYourPeerReview',
  NewReplyToComment = 'NewReplyToComment',
  NewReplyToPostInGroup = 'NewReplyToPostInGroup'
}

export type TestPlatformNotificationInput = {
  payload: Scalars['JsonString'];
  topic: NotificationTopic;
  userId: Scalars['ID'];
};

export type PlatformNotification = {
  __typename?: 'PlatformNotification';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  user: User;
  topic: NotificationTopic;
  subject: Scalars['String'];
  message: Scalars['String'];
  isRead: Scalars['Boolean'];
  isViewed: Scalars['Boolean'];
  trail?: Maybe<PlatformNotificationTrailUnion>;
};

export type PlatformNotificationTrailUnion = DiscussionMessage;

export type NotificationRedirectInput = {
  currentEmail: Scalars['String'];
  redirectEmail: Scalars['String'];
};

export type TypingInChatChannelInput = {
  channelId: Scalars['ID'];
  isStarted: Scalars['Boolean'];
};

export type UpdatePlatformVarInput = {
  name: Scalars['String'];
  value: Scalars['JsonString'];
  forRoles?: Maybe<Array<UserRole>>;
};

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onMessageInDiscussion: DiscussionMessage;
  onMessageUpdateInDiscussion: DiscussionMessage;
  onMessageVoteInDiscussion: DiscussionMessage;
  onMessageAttachmentsInDiscussion: DiscussionMessage;
  onMessagePinsInDiscussion: DiscussionMessage;
  onMessageRemoveInDiscussion: RemovedDiscussionMessage;
  onMessageReplyInDiscussions: DiscussionMessage;
  onDiscussionCreateInGroup: Discussion;
  onDiscussionUpdateInGroup: Discussion;
  onDiscussionRemoveInGroup: RemovedDiscussion;
  onMembersOnlineInGroup: OnlineMembersInGroup;
  onEarnedReward: EarnedReward;
  onPlatformNotification: PlatformNotification;
  onPlatformNotificationCounterUpdate: Scalars['Int'];
};


export type SubscriptionOnMessageInDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type SubscriptionOnMessageUpdateInDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type SubscriptionOnMessageVoteInDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type SubscriptionOnMessageAttachmentsInDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type SubscriptionOnMessagePinsInDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type SubscriptionOnMessageRemoveInDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type SubscriptionOnDiscussionCreateInGroupArgs = {
  groupId: Scalars['ID'];
};


export type SubscriptionOnDiscussionUpdateInGroupArgs = {
  groupId: Scalars['ID'];
};


export type SubscriptionOnDiscussionRemoveInGroupArgs = {
  groupId: Scalars['ID'];
};


export type SubscriptionOnMembersOnlineInGroupArgs = {
  groupId: Scalars['ID'];
};

export type RemovedDiscussionMessage = {
  __typename?: 'RemovedDiscussionMessage';
  messageId: Scalars['ID'];
  parent?: Maybe<DiscussionMessage>;
  root?: Maybe<DiscussionMessage>;
  discussion: Discussion;
};

export type RemovedDiscussion = {
  __typename?: 'RemovedDiscussion';
  discussionId: Scalars['ID'];
  host: DiscussionHostUnion;
};

export type OnlineMembersInGroup = {
  __typename?: 'OnlineMembersInGroup';
  groupId: Scalars['ID'];
  onlineMembersIds: Array<Scalars['ID']>;
};

export type EarnedReward = {
  __typename?: 'EarnedReward';
  effortName: EffortName;
  rewardSize: Scalars['Int'];
  subject: Scalars['String'];
  message: Scalars['String'];
};

export type AnalyticsReportQueryVariables = Exact<{
  analyticsReportInput: AnalyticsReportInput;
}>;


export type AnalyticsReportQuery = (
  { __typename?: 'Query' }
  & { analyticsReport: (
    { __typename?: 'AnalyticsReport' }
    & { activeLearnersInPeriod: Array<(
      { __typename?: 'User' }
      & { profile: (
        { __typename?: 'Profile' }
        & Pick<Profile, 'firstName' | 'lastName' | 'phoneNumber' | 'email' | 'middleName' | 'whatsAppNumber'>
      ) }
    )>, newComerLearnerStats: (
      { __typename?: 'NewComerLearnerStats' }
      & Pick<NewComerLearnerStats, 'totalRegistrations' | 'totalEnrolled' | 'totalCompletedProfile'>
      & { discussionsExcangedThisWeek: Array<(
        { __typename?: 'User' }
        & { profile: (
          { __typename?: 'Profile' }
          & Pick<Profile, 'firstName' | 'lastName' | 'phoneNumber' | 'email' | 'middleName' | 'whatsAppNumber'>
        ) }
      )>, usersEngagedConversationsThisWeek: Array<(
        { __typename?: 'User' }
        & { profile: (
          { __typename?: 'Profile' }
          & Pick<Profile, 'firstName' | 'lastName' | 'phoneNumber' | 'email' | 'middleName' | 'whatsAppNumber'>
        ) }
      )>, usersCompletedProfile: Array<(
        { __typename?: 'User' }
        & { profile: (
          { __typename?: 'Profile' }
          & Pick<Profile, 'firstName' | 'lastName' | 'phoneNumber' | 'email' | 'middleName' | 'whatsAppNumber'>
        ) }
      )>, usersRegistred: Array<(
        { __typename?: 'User' }
        & { profile: (
          { __typename?: 'Profile' }
          & Pick<Profile, 'firstName' | 'lastName' | 'phoneNumber' | 'email' | 'middleName' | 'whatsAppNumber'>
        ) }
      )>, usersEnrolled: Array<(
        { __typename?: 'User' }
        & { profile: (
          { __typename?: 'Profile' }
          & Pick<Profile, 'firstName' | 'lastName' | 'phoneNumber' | 'email' | 'middleName' | 'whatsAppNumber'>
        ) }
      )> }
    ), programActivity?: Maybe<(
      { __typename?: 'ProgramActivity' }
      & Pick<ProgramActivity, 'programId' | 'totalEngaged' | 'totalCompleted'>
      & { weeks: Array<(
        { __typename?: 'ProgramWeekActivity' }
        & Pick<ProgramWeekActivity, 'totalCompleted' | 'totalEngaged'>
        & { week: (
          { __typename?: 'ProgramWeek' }
          & Pick<ProgramWeek, 'title' | 'order'>
        ), usersCompleted: Array<(
          { __typename?: 'User' }
          & { profile: (
            { __typename?: 'Profile' }
            & Pick<Profile, 'firstName' | 'lastName' | 'phoneNumber' | 'email' | 'middleName' | 'whatsAppNumber'>
          ) }
        )>, users: Array<(
          { __typename?: 'User' }
          & { profile: (
            { __typename?: 'Profile' }
            & Pick<Profile, 'firstName' | 'lastName' | 'phoneNumber' | 'email' | 'middleName' | 'whatsAppNumber'>
          ) }
        )>, modules: Array<(
          { __typename?: 'ProgramModuleActivity' }
          & Pick<ProgramModuleActivity, 'moduleId' | 'totalEngaged' | 'totalCompleted'>
        )> }
      )> }
    )> }
  ) }
);

export type FetchProgramsBySourceQueryVariables = Exact<{
  clientFilter?: Maybe<ClientFilterInput>;
  source: UserSource;
}>;


export type FetchProgramsBySourceQuery = (
  { __typename?: 'Query' }
  & { fetchProgramsBySource: Array<(
    { __typename?: 'Program' }
    & Pick<Program, 'id' | 'title' | 'source'>
  )> }
);

export const AnalyticsReportDocument = gql`
    query AnalyticsReport($analyticsReportInput: AnalyticsReportInput!) {
  analyticsReport(analyticsReportInput: $analyticsReportInput) {
    activeLearnersInPeriod {
      profile {
        firstName
        lastName
        phoneNumber
        email
        middleName
        whatsAppNumber
      }
    }
    newComerLearnerStats {
      totalRegistrations
      totalEnrolled
      totalCompletedProfile
      discussionsExcangedThisWeek {
        profile {
          firstName
          lastName
          phoneNumber
          email
          middleName
          whatsAppNumber
        }
      }
      usersEngagedConversationsThisWeek {
        profile {
          firstName
          lastName
          phoneNumber
          email
          middleName
          whatsAppNumber
        }
      }
      usersCompletedProfile {
        profile {
          firstName
          lastName
          phoneNumber
          email
          middleName
          whatsAppNumber
        }
      }
      usersRegistred {
        profile {
          firstName
          lastName
          phoneNumber
          email
          middleName
          whatsAppNumber
        }
      }
      usersEnrolled {
        profile {
          firstName
          lastName
          phoneNumber
          email
          middleName
          whatsAppNumber
        }
      }
    }
    programActivity {
      programId
      totalEngaged
      totalCompleted
      weeks {
        week {
          title
          order
        }
        usersCompleted {
          profile {
            firstName
            lastName
            phoneNumber
            email
            middleName
            whatsAppNumber
          }
        }
        users {
          profile {
            firstName
            lastName
            phoneNumber
            email
            middleName
            whatsAppNumber
          }
        }
        totalCompleted
        totalEngaged
        modules {
          moduleId
          totalEngaged
          totalCompleted
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AnalyticsReportGQL extends Apollo.Query<AnalyticsReportQuery, AnalyticsReportQueryVariables> {
    document = AnalyticsReportDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchProgramsBySourceDocument = gql`
    query FetchProgramsBySource($clientFilter: ClientFilterInput, $source: UserSource!) {
  fetchProgramsBySource(clientFilter: $clientFilter, source: $source) {
    id
    title
    source
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchProgramsBySourceGQL extends Apollo.Query<FetchProgramsBySourceQuery, FetchProgramsBySourceQueryVariables> {
    document = FetchProgramsBySourceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }