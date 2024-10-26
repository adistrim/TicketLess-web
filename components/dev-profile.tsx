"use client";

import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeveloperProfileProps {
    name: string;
    role: string;
    avatarUrl: string;
    githubUsername: string;
    linkedinUsername: string;
}

const DeveloperProfile: FC<DeveloperProfileProps> = ({
    name,
    role,
    avatarUrl,
    githubUsername,
    linkedinUsername,
}) => (
    <div className="group flex flex-col items-center text-center p-3 rounded-lg transition-all duration-300 hover:bg-muted">
        <Avatar className="h-16 w-16 mb-3 ring-2 ring-transparent transition-all duration-300 group-hover:ring-primary/20">
            <AvatarImage 
                src={avatarUrl} 
                alt={name} 
                className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-primary text-lg">
                {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
        </Avatar>
        
        <div className="space-y-1 mb-2">
            <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                {name}
            </h3>
            <p className="text-xs text-muted-foreground">{role}</p>
        </div>
        
        <div className="flex gap-2 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8 hover:text-primary hover:bg-primary/10"
                onClick={() => window.open(`https://github.com/${githubUsername}`, '_blank')}
                aria-label={`Visit ${name}'s GitHub profile`}
            >
                <Github className="h-4 w-4" />
            </Button>
            <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8 hover:text-primary hover:bg-primary/10"
                onClick={() => window.open(`https://linkedin.com/in/${linkedinUsername}`, '_blank')}
                aria-label={`Visit ${name}'s LinkedIn profile`}
            >
                <Linkedin className="h-4 w-4" />
            </Button>
        </div>
    </div>
);

export default DeveloperProfile;