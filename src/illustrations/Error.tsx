import { Illustration, IllustrationProps } from "@components/Illustration";

export const IllusError = ({
  title = "Errore",
  ...rest
}: IllustrationProps) => (
  <Illustration name={title} {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.197 31.264a.86.86 0 0 0-.032.099 1.12 1.12 0 0 1-.022.073c-.067.189-.107.387-.119.587 0 .02-.006.039-.012.058-.006.02-.012.04-.012.062v85.714c0 1.184.96 2.143 2.143 2.143h85.714a2.142 2.142 0 0 0 2.143-2.143V2.143A2.143 2.143 0 0 0 102.857 0H45a.22.22 0 0 0-.066.013.232.232 0 0 1-.058.013c-.2.01-.397.05-.585.117-.074.023-.145.05-.215.082a2.068 2.068 0 0 0-.484.325c-.046.034-.091.07-.135.108 0 0-.023.015-.032.025l-27.857 30c-.155.173-.28.369-.371.581ZM42.857 7.6V30h-20.8l20.8-22.4ZM45 34.286H19.286v81.428h81.428V4.286H47.143v27.857c0 1.183-.96 2.143-2.143 2.143Z"
    />
    <path d="M50.694 55.16c.154-.144.286-.309.39-.491.052-.069.1-.14.143-.214a2.034 2.034 0 0 0 0-1.767 1.7 1.7 0 0 0-.144-.214 2.086 2.086 0 0 0-.389-.493c-.028-.025-.039-.062-.069-.086l-10.714-8.571a2.144 2.144 0 0 0-2.679 3.347l5.944 4.758H36.43a2.143 2.143 0 0 0 0 4.285h6.747l-5.944 4.756a2.143 2.143 0 1 0 2.679 3.346l10.714-8.572c.03-.023.04-.06.07-.084ZM83.571 51.429h-6.747l5.944-4.756a2.143 2.143 0 1 0-2.679-3.346l-10.714 8.571c-.03.023-.04.06-.07.085a2.077 2.077 0 0 0-.388.49c-.053.07-.1.141-.144.215a2.034 2.034 0 0 0 0 1.767c.043.074.091.145.144.214.103.182.235.347.389.49.028.026.039.063.069.086l10.714 8.57a2.143 2.143 0 1 0 2.679-3.345l-5.944-4.756h6.747a2.143 2.143 0 0 0 0-4.285ZM60 70.714a19.21 19.21 0 0 0-17.883 12.054 2.144 2.144 0 0 0 3.973 1.607 15.002 15.002 0 0 1 27.82 0 2.141 2.141 0 0 0 3.684.524c.47-.607.582-1.42.289-2.131A19.21 19.21 0 0 0 60 70.714Z" />
  </Illustration>
);
